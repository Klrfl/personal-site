---
title: How to create a loading text animation in Vue 3 (no libraries!)
pubDate: 2025-02-24T20:23:00.000Z
description: create a composable that returns a reactive loading text
author: Efraim
tags:
  - vue
  - tutorial
---

Hello and welcome to my first article written in 2025! Today I'm so proud of myself of making a commit of something really great something really useful and definitely productive and not a waste of my time, which is this loading text animation.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ebOLV6TglWM?si=j95YPg7a3fYbI0Rg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

It's beautiful isn't it? 🥹

Looking back it was pretty amazing how I can pull off such a small yet daunting task. It
Anyways, if you want to skip to the tutorial, here it is...

## How to make the composable

First if you haven't yet, create a file for your composables. You can put it in a composables folder in `src` or in the root of the project if you use Nuxt. You want to create a function starting with `use`:

```ts
export function useLoadingText() {
  // what do we write here lol
}
```

Here we start by defining some parameters in an object to reduce possible ambiguity:

```ts
interface LoadingTextParams {
  isLoading: boolean;
  text: string;
  loadingText: string;
}

export function useLoadingText(params: LoadingTextParams) {
  // ...
}
```

but, we are using Vue after all and we might pass some live refs in there, so we use `MaybeRefOrGetter` and use the `toRef` utility provided by Vue to create the final reactive loading text side effects... except for the `isLoading` param because we want it to be always a Vue ref.

```ts
import { Ref, toValue, type MaybeRefOrGetter } from "vue";

interface LoadingTextParams {
  isLoading: Ref<boolean>;
  text: MaybeRefOrGetter<string>;
  loadingText: MaybeRefOrGetter<string>;
}

export function useLoadingText(params: LoadingTextParams) {
  const ploadingText = toValue(params.loadingText);
}
```

and then we want to watch the `isLoading` ref to react when the `isLoading` state changes, then use that to return a reactive `loadingText` that can be used as a loading indicator:

```ts
// ... rest of code

export function useLoadingText(params: LoadingTextParams) {
  const pLoadingText = toValue(params.loadingText);
  const finalText = ref(params.text);

  watch(params.isLoading, (newIsLoading) => {
    // todo: add dots on specified times
    finalText.value = newIsLoading.value ? pLoadingText.value : params.text;
  });

  return { loadingText: finalText };
}
```

Next, we will use `setTimeout` to append dots to the `finalText`:

```ts
// .. rest of your useLoadingText code

watch(params.isLoading, (newIsLoading) => {
  setInterval(() => {
    finalText.value = params.loadingText ".";
  }, 500); // add dots every 500ms

  finalText.value = newIsLoading.value ? pLoadingText.value : pText.value;
});
```

we will now store the timeout ID returned by `setInterval` and pass it to `clearInterval` when `isLoading` is false to stop the dots from adding infinitely.

```ts
// ... rest of your useLoadingText code

let intervalID: NodeJS.Timeout | undefined;

watch(params.isLoading, (newIsLoading) => {
  if (newIsLoading) {
    intervalID = setInterval(() => {
      finalText.value += ".";
    }, 500); // add dots every 500ms

    return;
  }

  clearInterval(intervalID);
  intervalID = undefined;

  finalText.value = newIsLoading.value ? pLoadingText.value : pText.value;
});
```

But when doing this we notice that the `finalText` will be appended infinitely, and only after stopping the isLoading the `finalText` comes back to its initial state. So for the solution, we will store how many dots have been appended, and when it's already three, we set it back to the `loadingText` without the dots.

To counter this, we will store the amount of dots that have been appended, and when it reaches three, we will reset it back to 0.
we will also set it back to 0 when the isLoadingState is false.

```ts
// .. rest of your useLoadingText code

const repeatAmount = ref(0);

watch(params.isLoading, (newIsLoading) => {
  if (newIsLoading) {
    intervalID = setInterval(() => {
      finalText.value += ".".repeat(repeatAmount.value);
      repeatAmount.value += 1;
      if (repeatAmount.value > 3) repeatAmount.value = 1;
    }, 500); // add dots every 500ms

    return;
  }

  clearInterval(intervalID);
  intervalID = undefined;

  finalText.value = newIsLoading.value ? pLoadingText.value : pText.value;
});
```

Now that we have all the pieces, we can put it all together:

```ts
import { watch, ref, toValue, type Ref, type MaybeRefOrGetter } from "vue";

interface LoadingTextParams {
  isLoading: Ref<boolean>;
  text: MaybeRefOrGetter<string>;
  loadingText: MaybeRefOrGetter<string>;
}

export function useLoadingText(params: LoadingTextParams) {
  const pLoadingText = toValue(params.loadingText);
  const finalText = ref(params.text);
  const repeatAmount = ref(0);

  let intervalID: NodeJS.Timeout | undefined;

  watch(params.isLoading, (newIsLoading) => {
    finalText.value = newIsLoading ? pLoadingText : params.text;

    if (newIsLoading) {
      return (intervalID = setInterval(() => {
        finalText.value = pLoadingText + ".".repeat(repeatAmount.value);
        repeatAmount.value += 1;
        if (repeatAmount.value > 3) repeatAmount.value = 1;
      }, 500)); // add dots every 500ms
    }

    repeatAmount.value = 0;
    clearInterval(intervalID);
    intervalID = undefined;
  });

  return { loadingText: finalText };
}
```

## Test it out

Now we have put together a simple composable to render a loading text! You can test it in a vue page like so:

```vue
<script setup lang="ts">
import { ref } from "vue";
import { useLoadingText } from "@/composables/";

const isLoading = ref(false);

const { loadingText } = useLoadingText({
  isLoading,
  text: "Not loading yet",
  loadingText: "loading",
});
</script>

<template>
  <section class="page">
    <h1>{{ loadingText }}</h1>

    <div class="container">
      <button @click="isLoading = true" :disabled="isLoading">
        Let's load
      </button>
      <button @click="isLoading = false" :disabled="!isLoading">
        Stop loading
      </button>
    </div>
  </section>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  align-content: center;
}
.container {
  display: flex;
  gap: 1rem;
}
</style>
```

You can see a [live demo](https://play.vuejs.org/#eNqNVW1v2zYQ/is3fZmNOrKDrF8021u3FUOKLi2aYp8EFIx0ktlSpEBSjg1X/71H6sWUmwYFEsC8e+7uuYfH0yl6VdfxvsEoidYm07y2YNA2NQgmy00aWZNG21Tyqlbawgk0FtBCoVUFaURxafR74G0MvlUs57L8iAd7BsbLTBHGsAeBlJBCUpkpaSxw0wfAxuWeFUwYnJ/9JxCThJuLGrNTKuGcZQGWjAmVvFN2CIUj2jRahJkcoj+mUSpbqrhedv1Tt3SwWNWCWaQTwNpgZrmSkAlmDKlSs5I69z4Aj9hdb08XXNv1kqwum0fkfD/GU2+WcYl6TLJ+aKylCn9mgmdfCBIKY7UTGpKcewXz0E0Z3qL91fja62WX5meSeqUvsv4Spr23isagO04Sr5fUS/+rV4ZO62WgGR2NPQoEk6kac7LETjPwt1VxebVDXu7oGq5Xq/2O5gGAaFD0MYFS89xb6JjhFae0JoEMpUXt7UzwUl45DckWeFqqMirblRqTFgIPPrhkNVXVWHUB1IHjuY0WNOoUXPAy/myUpPfgE7i7qmouUL+rXaM0vUmX2vmYEOrxjbe5O1oM9myH2Zcn7J/NwdnS6L1Gg3pP+o8+y3Tp5tS5X9/f0QgFzkrljSD0M84PaJRoHMcO9lcjc6Id4DzbW/9W3ZCa1wcS0AxN+SEjZOvx/nH//UzrZ7o38W8+jvQkFYOHHltDMg7L4ZHZbLdwj5weqfqfCdIF7LFG+OBN7td/7PhAjRTv9L9o6VK/WzWaRov+ubvxgqYDglXwnmlWGWJIgGAlJC7/+kEpgUxufQrot8RlOZpZTREDaLIvnsW2AzE8+GaLRnYL42JZ1Z5i8j3r+UC723p1uEXp/Xdy9eFxwGtOVxHEFVwy0Qe5bdoHuG7nfVMdUGONzL6qVCMH7KpD9K0jrWYn8p6J238SuFM5vrmPP/IKVWPhK9BwIVXD/BzjL3goGWzkmcTH2+E4h8126BXOfGOq0yAxCbHwx1SIBIJ+ArJ02cVllbEEUHO20TJoh8rQN+62P89mU05P85oQeeE+afTXqTgLxewCBrEHApd+eLGB6wnGdfAEbgs386fip+HtAl6u6P5guQSW55ArawD3qI/OXpkBOY7pD1htYDV4M3otepTorN25s4me4zj07jYcpv4CJp9H2sjjrLbdG6Ll8Yk4u4VEa+Mmfhlf30TtN2ic9YE=)
right here:

<iframe style="width:100%; min-height: 60vh" src="https://play.vuejs.org/#eNqNVW1v2zYQ/is3fZmNOrKDrF8021u3FUOKLi2aYp8EFIx0ktlSpEBSjg1X/71H6sWUmwYFEsC8e+7uuYfH0yl6VdfxvsEoidYm07y2YNA2NQgmy00aWZNG21Tyqlbawgk0FtBCoVUFaURxafR74G0MvlUs57L8iAd7BsbLTBHGsAeBlJBCUpkpaSxw0wfAxuWeFUwYnJ/9JxCThJuLGrNTKuGcZQGWjAmVvFN2CIUj2jRahJkcoj+mUSpbqrhedv1Tt3SwWNWCWaQTwNpgZrmSkAlmDKlSs5I69z4Aj9hdb08XXNv1kqwum0fkfD/GU2+WcYl6TLJ+aKylCn9mgmdfCBIKY7UTGpKcewXz0E0Z3qL91fja62WX5meSeqUvsv4Spr23isagO04Sr5fUS/+rV4ZO62WgGR2NPQoEk6kac7LETjPwt1VxebVDXu7oGq5Xq/2O5gGAaFD0MYFS89xb6JjhFae0JoEMpUXt7UzwUl45DckWeFqqMirblRqTFgIPPrhkNVXVWHUB1IHjuY0WNOoUXPAy/myUpPfgE7i7qmouUL+rXaM0vUmX2vmYEOrxjbe5O1oM9myH2Zcn7J/NwdnS6L1Gg3pP+o8+y3Tp5tS5X9/f0QgFzkrljSD0M84PaJRoHMcO9lcjc6Id4DzbW/9W3ZCa1wcS0AxN+SEjZOvx/nH//UzrZ7o38W8+jvQkFYOHHltDMg7L4ZHZbLdwj5weqfqfCdIF7LFG+OBN7td/7PhAjRTv9L9o6VK/WzWaRov+ubvxgqYDglXwnmlWGWJIgGAlJC7/+kEpgUxufQrot8RlOZpZTREDaLIvnsW2AzE8+GaLRnYL42JZ1Z5i8j3r+UC723p1uEXp/Xdy9eFxwGtOVxHEFVwy0Qe5bdoHuG7nfVMdUGONzL6qVCMH7KpD9K0jrWYn8p6J238SuFM5vrmPP/IKVWPhK9BwIVXD/BzjL3goGWzkmcTH2+E4h8126BXOfGOq0yAxCbHwx1SIBIJ+ArJ02cVllbEEUHO20TJoh8rQN+62P89mU05P85oQeeE+afTXqTgLxewCBrEHApd+eLGB6wnGdfAEbgs386fip+HtAl6u6P5guQSW55ArawD3qI/OXpkBOY7pD1htYDV4M3otepTorN25s4me4zj07jYcpv4CJp9H2sjjrLbdG6Ll8Yk4u4VEa+Mmfhlf30TtN2ic9YE=">
</iframe>

have fun using it in your projects!

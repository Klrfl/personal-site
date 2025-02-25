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

<!-- insert video here -->

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

but, we are using Vue after all and we might pass some live refs in there, so we use `MaybeRefOrGetter and use the `toRef` utility provided by Vue to create the final reactive loading text side effects.

```ts
import { toValue, type MaybeRefOrGetter } from "vue";

interface LoadingTextParams {
  isLoading: MaybeRefOrGetter<boolean>;
  text: MaybeRefOrGetter<string>;
  loadingText: MaybeRefOrGetter<string>;
}

export function useLoadingText(params: LoadingTextParams) {
  const pText = tovalue(params.text);
  const ploadingText = tovalue(params.loadingText);
}
```

and then we want to watch the `isLoading` ref to react when the `isLoading` state changes, then use that to return a reactive `loadingText` that can be used as a loading indicator:

```ts
// ... rest of code

export function useLoadingText(params: LoadingTextParams) {
  const pText = toValue(params.text);
  const pLoadingText = toValue(params.loadingText);
  const finalText = ref(params.text);

  watch(params.isLoading, (newIsLoading) => {
    // todo: add dots on specified times
    finalText.value = newIsLoading.value ? pLoadingText.value : pText.value;
  });

  return { loadingText: finalText };
}
```

Next, we will use `setTimeout` to append dots to the `finalText`:

```ts
// .. rest of your useLoadingText code

watch(params.isLoading, (newIsLoading) => {
  setInterval(() => {
    finalText.value += ".";
  }, 500); // add dots every 500ms

  finalText.value = newIsLoading.value ? pLoadingText.value : pText.value;
});
```

we will now store the timeout ID returned by `setInterval` and pass it to `clearInterval` when `isLoading` is false to stop the dots from adding infinitely.

```ts
// ... rest of your useLoadingText code

let timeoutID: NodeJS.Timeout | undefined;

watch(params.isLoading, (newIsLoading) => {
  if (newIsLoading) {
    timeoutID = setInterval(() => {
      finalText.value += ".";
    }, 500); // add dots every 500ms

    return;
  }

  clearInterval(timeoutID);
  timeoutID = undefined;

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
    timeoutID = setInterval(() => {
      finalText.value += ".".repeat(repeatAmount.value);
      repeatAmount.value += 1;
      if (repeatAmount.value > 3) repeatAmount.value = 0;
    }, 500); // add dots every 500ms

    return;
  }

  clearInterval(timeoutID);
  timeoutID = undefined;

  finalText.value = newIsLoading.value ? pLoadingText.value : pText.value;
});
```

now we put it all together:

```ts
// composables/index.ts
import { ref, toRef, type MaybeRefOrGetter } from "vue";

interface LoadingTextParams {
  isLoading: MaybeRefOrGetter<boolean>;
  text: MaybeRefOrGetter<string>;
  loadingText: MaybeRefOrGetter<string>;
}

export function useLoadingText(params: LoadingTextParams) {
  const pText = toRef(params.text);
  const pLoadingText = toRef(params.loadingText);
  const finalText = ref(params.text);

  watch(params.isLoading, (newIsLoading) => {
    if (newIsLoading) {
      timeoutID = setInterval(() => {
        finalText.value += ".".repeat(repeatAmount.value);
        repeatAmount.value += 1;
        if (repeatAmount.value > 3) repeatAmount.value = 0;
      }, 500); // add dots every 500ms

      return;
    }

    clearInterval(timeoutID);
    timeoutID = undefined;

    finalText.value = newIsLoading.value ? pLoadingText.value : pText.value;
  });

  return { loadingText: finalText };
}
```

## test it out

Now we have put together a simple composable to render a loading text! You can test it in a vue page like so:

```vue
<script setup lang="ts">
import { ref } from "vue";
import { useLoadingText } from "@/composables/";

const isLoading = ref(false);

const { loadingText } = useLoadingText(isLoading, "let's load", "loading");
</script>

<template>
  <h1>{{ loadingText }}</h1>
  <button @click="isLoading = true">Let's load</button>
  <button @click="isLoading = false">Stop loading</button>
</template>
```

have fun using it in your projects!

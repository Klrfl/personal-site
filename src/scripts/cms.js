import CMS from "decap-cms-app";
import uploadcare from "decap-cms-media-library-uploadcare";

CMS.init();
CMS.registerMediaLibrary(uploadcare);
CMS.registerPreviewStyle(
  `
.frame-content {
  max-width: 60rem;
  margin-inline: auto;
}

.frame-content img {
  display: block;
  max-width: 100%;
  margin-inline: auto;
  margin-block: 1rem;
}
`,
  { raw: true },
);

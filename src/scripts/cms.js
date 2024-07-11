import CMS from "decap-cms-app";
import styles from "../styles/preview.css";
import uploadcare from "decap-cms-media-library-uploadcare";

CMS.init();
CMS.registerMediaLibrary(uploadcare);
CMS.registerPreviewStyle(styles.toString(), { raw: true });

import CMS from "decap-cms-app";
import styles from "../styles/preview.css";

CMS.init();
CMS.registerPreviewStyle(styles.toString(), { raw: true });

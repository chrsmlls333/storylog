import ImageFigure from "/admin/custom-widgets/image-figure.js";
import More from "/admin/custom-widgets/more.js";

CMS.registerEditorComponent(ImageFigure);
CMS.registerEditorComponent(More);

CMS.registerWidget('create-select', window.CreatableSelectControl, window.CreatableSelectPreview)
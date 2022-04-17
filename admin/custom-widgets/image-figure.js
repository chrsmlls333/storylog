const imagepath = "/assets/images/"

const ImageFigure = {

  // Internal id of the component
  id: "image-figure",
  // Visible label
  label: "Image Figure",
  // Fields the user need to fill out when adding an instance of the component
  collapsed: true,
  summary: '{{fields.src}}\n{{fields.caption}}',
  fields: [{
      name: 'src',
      label: 'Image',
      widget: 'image',
      choose_url: true,
      media_library: {
        config: {
          multiple: true
        }
      },
      required: true
    },
    {
      name: 'caption',
      label: 'Caption',
      widget: 'string'
    },
    {
      name: 'alt',
      label: 'Alt Text',
      widget: 'string'
    },
    {
      name: 'url',
      label: 'Link',
      widget: 'string'
    },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^{%\s+include\s+image\.html\s+[^%]*%}$/,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    let txt = match[0];
    let srcPattern = /src(?:abs)?=["']([^"']*)["']/
    let urlPattern = /url=["']([^"']*)["']/
    let altPattern = /alt=["']([^"']*)["']/
    let captionPattern = /caption=["']([^"']*)["']/
    let abs = txt.includes('srcabs');

    let src = (txt.match(srcPattern) && txt.match(srcPattern)[1]) || ""
    src = (!!src && !abs) ? imagepath + src : src;
    let url = (txt.match(urlPattern) && txt.match(urlPattern)[1]) || ""
    let alt = (txt.match(altPattern) && txt.match(altPattern)[1]) || ""
    let caption = (txt.match(captionPattern) && txt.match(captionPattern)[1]) || ""

    return {
      src,
      url,
      alt,
      caption
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
    let args = Object.entries(obj).map(([k, v]) => {
      let isAbs = false;
      if (k === 'src') {
        if (v.startsWith(imagepath)) {
          v = v.slice(imagepath.length);
        } else {
          isAbs = true
        }
      }
      return `${k}${isAbs?'abs':''}="${v}"`
    }).join('\n  ')
    return `{% include image.html\n  ${args}\n%}`
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (obj) {
    return (
      `<figure><img src="${obj.src}" alt="${obj.alt}"/><figcaption>${obj.caption}</figcaption>`
    );
  }

};

export default ImageFigure;
const More = {

  // Internal id of the component
  id: "more",
  // Visible label
  label: "More (Excerpt Separator)",
  description: "This is an excerpt separator, and will be used to trim longer text in the blog list.",
  COLLAPSED: true,
  // Pattern to identify a block as being an instance of this component
  pattern: /^<!-- ?more ?-->$/,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    return {};
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
    return `<!--more-->`
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (obj) {
    return (
      `<!--more-->`
    );
  }

};

export default More;
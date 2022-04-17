import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Post = createClass({
  render() {
    const entry = this.props.entry;
    const author = entry.getIn(["data", "author"], null);

    const body = (function(props) {
        try { return props.widgetFor("body"); } 
        catch (error) { return "" }
    })(this.props)

    return html`
        <div class="page-content">
            <article class="post">
                
                <header class="post-header">

                    <h1 class="site-title">
                        <span class="slash">Blog</span>
                        <span>${entry.getIn(["data", "title"], "Untitled")}</span>
                    </h1>

                    <ul class="post-meta">

                        <li><time>${format(new Date(entry.getIn(["data", "date"], new Date())), "MMM dd, yyyy")}</time></li>
                        
                        <li><span><span>${author}</span></span></li>

                        ${(entry.getIn(["data", "tags"], []) || []).map(t => `#${t}`).join(" · ")}

                    </ul>

                </header>

                <div class="post-content" itemprop="articleBody">
                    ${body}
                </div>

            </article>
        </div>
    `
  }
});

export default Post;
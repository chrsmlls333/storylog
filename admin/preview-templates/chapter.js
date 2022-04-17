import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Chapter = createClass({
  render() {
    const entry = this.props.entry;

    const body = (function(props) {
        try { return props.widgetFor("body"); } 
        catch (error) { return "" }
    })(this.props)

    const wordCountResult  = (function(props) {
        try { return wordCount(props.widgetFor("body").props.value); } 
        catch (error) { return 0 }
    })(this.props)

    function wordCount(str) {
        var m = str.match(/[^\s]+/g)
        return m ? m.length : 0;
    }
  
    return html`
        <div class="page-content">
            <article class="chapter">
                
                <header class="post-header">

                    <h1 class="site-title">
                        <span class="slash">${entry.getIn(["data", "series"], "Stories")}</span>
                        <span>${entry.getIn(["data", "entry"], "Untitled")}</span>
                    </h1>

                    <ul class="post-meta">

                        <li><time>${format(new Date(entry.getIn(["data", "date"], new Date())), "MMM dd, yyyy")}</time></li>
                        
                        <li><span><span>${entry.getIn(["data", "author"], null)}</span></span></li>

                        <li><span><span>${entry.getIn(["data", "editor"], null)}</span></span></li>

                        <li><span itemprop="wordCount">${wordCountResult} words</span></li>
                        
                        ${(entry.getIn(["data", "tags"], []) || []).map(t => `#${t}`).join(" · ")}

                    </ul>

                </header>

                <div class="chapter-content" itemprop="articleBody">
                    ${body}
                </div>

            </article>
        </div>
    `
  }
});

export default Chapter;
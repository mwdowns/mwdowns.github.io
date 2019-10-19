
var footer = document
var title = footer.title
var about = "About - Matthew Downs"
var projects = "Projects - Matthew Downs"
var scribbles = "Scribbles - Matthew Downs"

function write_footer() {
  switch(title) {
    case about:
      return `
        <div class="footer">
          <div class="navigation-links">
            <a href="../index.html">home</a> |
            <a href="projects.html">projects</a> | 
            <a href="scribbles.html">scribbles</a>
          </div>
        </div>`
    case projects:
      return `
        <div class="footer">
          <div class="navigation-links">
            <a href="../index.html">home</a> |
            <a href="about.html">about</a> | 
            <a href="scribbles.html">scribbles</a>
          </div>
        </div>`
    case(scribbles):
      return `
        <div class="footer">
          <div class="navigation-links">
            <a href="../index.html">home</a> |
            <a href="about.html">about</a> | 
            <a href="projects.html">projects</a>
          </div>
        </div>`
    default:
      return `
        <div class="footer">
          <div class="navigation-links">
            <a href="pages/about.html">about</a> | 
            <a href="pages/projects.html">projects</a> | 
            <a href="pages/scribbles.html">scribbles</a>
          </div>
        </div>`
  }
}

footer.write(write_footer())
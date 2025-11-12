var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Mitch Keller Department of Mathematics University of Wisconsin Madison    My Website   copyright         "
},
{
  "id": "sec-why",
  "level": "1",
  "url": "sec-why.html",
  "type": "Section",
  "number": "1",
  "title": "Why Care About Accessibility?",
  "body": " Why Care About Accessibility?  A lot of us are feeling a sense of urgency around accessible course materials now because of the change in applicability of the Americans with Disabilities Act to require that all digital course materials meet WCAG 2.1, Level AA standards for accessibility. However, campus has been moving toward making its public-facing websites accessible for many years, and there was a long-term plan to help transition digital course materials to accessible formats. The change in ADA regulations has put us on an expedited timeline.  Broadly speaking, when we think about digital accessibility, most concerns focus on making materials accessible to individuals who use screen reader technology. This is a particular difficulty for instructors in STEM fields (and some adjacent fields such as Economics or Actuarial Science), as our course content typically requires a significant amount of mathematical notation. For decades, the gold standard for typesetting mathematical notation has been latex (and its predecessor TeX). However, latex was designed to produce files meant to be printed. It has a heavy focus on producing beautiful print documents, and historically, the PDFs produced by latex do not meet even the most basic of accessibility standards. I highly recommend viewing a demonstration of a screen reader attempting to read the mathematical content of a PDF produced by latex compared to the PreTeXt version of the same content.  When we talk about screen reader users, the audience that comes to mind most often are blind and visually-impaired readers. Most instructors in higher education have never taught a blind or severely visually-impaired student, so the need to meet these accessibility standards can feel befuddling at times. However, there is a much larger segment of the population with other print disabilities (including dyslexia) who use screen readers. I personally know a mathematics faculty member at another university in Wisconsin whose dyslexia is so bad that he cannot read above a second-grade level. However, he earned a PhD in mathematics. At the time, he had to rely largely on the goodwill of others who made audio cassette recordings of the standard textbooks in advanced mathematics. Now, as more materials become available digitally and in an accessible format, he's able to read more materials by using a screen reader. In order to facilitate this, it's important that mathematical content be included in a useful way .  When I refer to including mathematical content in a useful way, I do not mean something like Just put the math in as an image and put alt-text on it that describes the math. Consider this expression, which is an actual mathematical definition that appears in the MATH 234 textbook: . Most screen readers will stop reading alt-text somewhere between 100 and 140 characters. The latex required to typeset that equation is 276 characters long (with very little extraneous whitespace). It would take even more characters to type out in words. By presenting the mathematical content in a web page that uses MathJax to present the mathematics, someone using a screen reader can navigate the expression carefully.  "
},
{
  "id": "sec-canvas",
  "level": "1",
  "url": "sec-canvas.html",
  "type": "Section",
  "number": "2",
  "title": "Short Content in Canvas",
  "body": " Short Content in Canvas  The quickest and easiest way for an instructor to get small documents (e.g., homework solutions) available to students in an accessible format is to use the MathJax support in Canvas. UW Madison's Canvas instance has the MathJax components enabled by default. While this has the limitation that instructors\/authors who have elaborate custom latex macros will not be able to use those macros MathJax supports macros, but they must be inside a script tag in HTML. Canvas's rich content editor strips out all script elements. , it's unlikely that something appearing in a small document for students would require such macros.  Putting math content into a Canvas page (or basically any text box one can write in on Canvas, including announcements, quizzes, etc.) is as simple as marking the mathematical content with the appropriate delimiters.   For inline math , which is displayed in the middle of a line as I just did, the correct delimiter is \\( before the math content and \\) afterward. You likely need this all on one line, so for example \\(ax^2+bx+c=0\\) will render nicely.    For displayed mathematics , which is centered on its own line such as , the correct delimiter is \\[ before the math content and \\] afterward. You likely need this all on one line, so for example \\[x=\\frac{-b\\pm \\sqrt{b^2-4ac}}{2a}\\] will render nicely.      If you are supporting long-time latex users , you may have to help them retrain their fingers. latex allows the use of $ as the delimiter (one on each side) for inline math and $$ (one pair on each side) for displayed math. Fortunately, latex also supports the delimiters that MathJax expects, so if your users are still wanting to use latex to prepare things that will be used in print format, they can retrain their fingers to use the Canvas-supported delimiters and just use them everywhere. (I've been using latex for more than 20 years, and it only took a couple of weeks to retrain my fingers.)  MathJax also supports some more elaborate way that latex provides for displaying equations, such as multiline aligned equations. These generally involve starting with a command such as \\begin{align*} . I have found that these work fine in Canvas, but you need to use shift+return to insert line breaks while editing on Canvas. If you just hit return, it separates the content too much.  Math content might need < and >, and latex sometimes uses & as a control character in matrices or for alignment. These are special characters in HTML. MathJax includes the commands \\lt , \\gt , and \\amp to make things work well. Canvas seems to properly escape things automatically, so typing <, >, or & should work fine, but knowing about these special commands might be helpful.  "
},
{
  "id": "sec-canvas-3",
  "level": "2",
  "url": "sec-canvas.html#sec-canvas-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inline math displayed mathematics "
},
{
  "id": "sec-wordproc",
  "level": "1",
  "url": "sec-wordproc.html",
  "type": "Section",
  "number": "3",
  "title": "Word Processors",
  "body": " Word Processors  Using Microsoft Word or Google Docs isn't the worst idea in the world for producing accessible documents, even with mathematical content. Word's equation editor even has rudimentary support for latex syntax, so someone who has latex source could use that and keyboard shortcuts to get into\/out of the equation editor pretty efficiently.   However , default user behavior in a word processor tends to not produce accessible documents. In particular, an accessible document needs to have a meaningful heading structure. Most users are not in the habit of using the built-in heading styles, and the software generally will let you skip from a level 2 heading to a level 4 heading with no level 3 heading in between, which violates accessibility requirements.  I am not an expert in using word processors to create accessible documents, so I'm not going to say much more here. It is definitely possible, but it requires a level of care that most users have not historically applied.  "
},
{
  "id": "sec-pretext",
  "level": "1",
  "url": "sec-pretext.html",
  "type": "Section",
  "number": "4",
  "title": "PreTeXt",
  "body": " PreTeXt  I've been working in PreTeXt since it was called Mathbook XML back in 2016. Since then, it has grown into a robust ecosystem that provides forward-looking solutions. PreTeXt takes care of most of the aspects of accessibility for you:   The HTML is carefully designed to be accessible. For instance, you can't do things that would result in skipping heading levels.    MathJax is employed to render the mathematical content in the HTML output.    You can produce latex source from your PreTeXt file, which is useful for making a print document, such as a test.    You can produce EPUB from your PreTeXt source, which is likely a format someone who uses a screen reader would appreciate having access to offline. The mathematical content in EPUB is also processed using MathJax so that meaningful speech strings to read the math are embedded.    You can produce braille from your PreTeXt source.    Your PreTeXt can be used in the future to produce formats that don't even exist yet.     The Gitlab repository I've created demonstrates a few ways in which I've used PreTeXt in my teaching:   Course syllabus: You can get HTML to post on any web server or a SCORM file that can be uploaded to Canvas and used as a page. I also have set up a build target for latex in case producing a print version is important.    Tests: I write my tests in PreTeXt . I convert to latex so that I can add a cover page, etc. manually (until PreTeXt adds full support for tests) and then print. However, I use the SCORM output format to upload to Canvas for my students (including the solutions).    Course handout:     In a separate repository , I have an example of handouts or worksheets for in-class activities. (This is basically the same setup as used for the example test in this repository.) PreTeXt also supports HTML slides via reveal.js, which I have in a separate repository with some additional guidance on how I use these slides to allow hand-annotation in class and then having a fully HTML version to share with students after class.  "
},
{
  "id": "sec-images",
  "level": "1",
  "url": "sec-images.html",
  "type": "Section",
  "number": "5",
  "title": "Working with Images",
  "body": " Working with Images   PreTeXt provides great support for providing the content required for images to be considered accessible. The shortdescription tag gets used as the alt-text for the image. This is intended for short, unstructured text, given the constraints on how screen readers handle alt-text. The description tag gets put in as an image discription that is available to both screen reader users and sighted users (but is initially collapsed).  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This document was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

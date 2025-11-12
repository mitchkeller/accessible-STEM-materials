# Accessibility for STEM materials

## Context

I'm using "STEM materials" as a shorthand for "courses requiring a significant amount of mathematical notation". I have a preferred technology (PreTeXt) for preparing accessible forms of longer documents, but the suggestions here will cover a wider range of tools that can be used successfully for shorter documents. We need to think about how to do this because of how screen readers [handle mathematical content](https://mathtech.org/2025/04/25/screen-reader.html).

## Main materials

I've used PreTeXt to write up some longer-form documentation, and the source code is included in the `source/notes` directory of this repository. You should start by reading the [HTML version](https://whee).

## Samples

This repository includes a number of resources that can be used to help get started on your own projects. Use the [landing page](https://whee) to have easy access to the HTML versions of these resources. The [notes](https://whee) provide more information about using these.

1. Sample syllabus is in `source/syllabus`. There are several build targets in `project.ptx`:
    - `syllabus` creates the HTML version
    - `syllabus-latex` provides LaTeX source that can be massaged to produce a version that might print better than the HTML version. (This version will not meet accessibility standards and should not be shared electronically!)
    - `syllabus-canvas` builds a SCORM file that can be uploaded to Canvas. You can mimic the entry in `project.ptx` for `syllabus-canvas` to produce SCORM versions of other HTML outputs.
1. Sample test is in `source/test`.
1. Sample handout (for an in-class activity) is provided [in a Github repository](https://github.com/mitchkeller/syllabus-worksheet-demo) and you can view the [example output](https://math.mitchkeller.phd/syllabus-worksheet-demo/worksheets/frontmatter.html).
1. Sample reveal.js slides are provided [in a Github repository](https://github.com/mitchkeller/slides-demo) with some [additional guidance](https://mathtech.org/2025/10/27/annotated-slides.html).
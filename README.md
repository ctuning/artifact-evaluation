CK-powered website for Artifact Evaluation for PPoPP, CGO, ADAPT
================================================================

Prerequisites
=============
* Collective Knowledge Framework: http://github.com/ctuning/ck

If you have python pip, you can install it simply via:

 $ pip install ck

Description
===========

CK web front-end templates, styles and images.

Usage:

 $ ck pull repo:ck-web-artifact-evaluation

 (dependency on ck-web repo will be automatically resolved)

 $ ck start web

 $ Open web page: http://localhost:3344/?template=artifact-evaluation&page=index

 That's all.

Note, that it is possible to create a static website
(as we use at http://cTuning.org/ae)

Just go to script/compile-website-adapt-workshop
and run on Linux:

 $ create_website.sh

or on Windows:

 $ create_website.bat

This will create static html pages in tmp-website sub-directory
that you can upload to your web server.

CK-powered website for Artifact Evaluation for computer systems' events
=======================================================================

Conferences, workshops and journals using our AE methodology
============================================================

* PPoPP
* CGO
* ADAPT
* PACT

See AE website for more details: http://cTuning.org/ae 

Prerequisites
=============
Collective Knowledge Framework for Open and Reproducible R&D: 
http://github.com/ctuning/ck

Description
===========

CK web front-end templates, styles and images.

Usage:

```
 $ ck pull repo:ck-web-artifact-evaluation
```

 (dependency on ck-web repo will be automatically resolved)

```
 $ ck start web

 $ Open web page: http://localhost:3344/?template=artifact-evaluation&page=index
```

That's all.

Note, that it is possible to create a static website
(as we use at http://cTuning.org/ae)

Just go to ''script/compile-website-adapt-workshop''
and run on Linux:

```
 $ create_website.sh
```

or on Windows:
```
 $ create_website.bat
```

This will create static html pages in tmp-website sub-directory
that you can upload to your web server.

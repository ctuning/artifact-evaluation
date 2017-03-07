![logo](https://github.com/ctuning/ck-guide-images/blob/master/logo-validated-by-the-community-simple.png)

This is a Collective Knowledge repository to generate http://cTuning.org/ae website.

Prerequisites
=============
Collective Knowledge Framework to implement customizable, portable, reusable and reproducible
research workflows: http://github.com/ctuning/ck

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

Artifacts in the CK format
==========================

Please, check out this reusable and customizable artifact from [CGO'17](http://cgo.org/cgo2017) 
with automatic cross-platform software installation and web-based experimental dashboard powered 
by the CK framework: 
* [GitHub CK repo](https://github.com/SamAinsworth/reproduce-cgo2017-paper)
* [Paper with artifact appendix](http://cTuning.org/ae/resources/paper-with-distinguished-ck-artifact-and-ae-appendix-cgo2017.pdf)
* [PDF snapshot of the interactive CK dashboard](https://github.com/SamAinsworth/reproduce-cgo2017-paper/files/618737/ck-aarch64-dashboard.pdf)
* [CK concepts](https://michel-steuwer.github.io/About-CK)

Feedback and public discussions
===============================
* [CK mailing list](http://groups.google.com/group/collective-knowledge)

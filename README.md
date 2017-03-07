![logo](https://github.com/ctuning/ck-guide-images/blob/master/logo-validated-by-the-community-simple.png)

This is a Collective Knowledge repository to generate http://cTuning.org/ae website.

Prerequisites
=============
Collective Knowledge Framework to implement customizable, portable, reusable and reproducible
research workflows: http://github.com/ctuning/ck

Publications
============

```
@inproceedings{Fur2009,
  author =    {Grigori Fursin},
  title =     {{Collective Tuning Initiative}: automating and accelerating development and optimization of computing systems},
  booktitle = {Proceedings of the GCC Developers' Summit},
  year =      {2009},
  month =     {June},
  location =  {Montreal, Canada},
  keys =      {http://www.gccsummit.org/2009}
  url  =      {https://scholar.google.com/citations?view_op=view_citation&hl=en&user=IwcnpkwAAAAJ&cstart=20&citation_for_view=IwcnpkwAAAAJ:8k81kl-MbHgC}
}

@inproceedings{Fursin:2014:CRV:2618137.2618142,
 author = {Fursin, Grigori and Dubach, Christophe},
 title = {Community-driven Reviewing and Validation of Publications},
 booktitle = {Proceedings of the 1st ACM SIGPLAN Workshop on Reproducible Research Methodologies and New Publication Models in Computer Engineering},
 series = {TRUST '14},
 year = {2014},
 isbn = {978-1-4503-2951-4},
 location = {Edinburgh, United Kingdom},
 pages = {5:1--5:4},
 articleno = {5},
 numpages = {4},
 url = {http://doi.acm.org/10.1145/2618137.2618142},
 doi = {10.1145/2618137.2618142},
 acmid = {2618142},
 publisher = {ACM},
 address = {New York, NY, USA},
 keywords = {collaborative artifact evaluation, collective mind, community-driven journals, crowdsourcing paper reviewing, reproducible research, software and hardware dependencies},
} 

```

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

[![compatibility](https://github.com/ctuning/ck-guide-images/blob/master/ck-compatible.svg)](https://github.com/ctuning/ck)
[![DOI](https://zenodo.org/badge/42662522.svg)](https://zenodo.org/badge/latestdoi/42662522)

Data license: [![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by/4.0/)
Code license: [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

This is a [Collective Knowledge](https://github.com/ctuning/ck) repository 
with methodology, templates and workflows to reproduce results 
from published articles (artifact evaluation) - 
see [Artifact Evaluation evaluation website](http://cTuning.org/ae) 
for more details.

Description
===========

Install Collective Knowledge (CK) on Linux, Windows or MacOS 
as described in this [Read Me](https://github.com/ctuning/ck).


Pull this repository:

```
 $ ck pull repo:ck-artifact-evaluation
```

Note that dependency on ck-web and other CK repositories will be automatically resolved.


```
 $ ck start web
 $ Open web page: http://localhost:3344/?template=artifact-evaluation&page=index
```

That's all!

Note, that it is also possible to create a static website for http://cTuning.org/ae as follows:


```
 $ cd `script/compile-website-adapt-workshop`
 $ ./create_website.sh
```

or on Windows:
```
 $ ck find script/compile-website-adapt-workshop
 $ cd /D {above directory}
 $ create_website.bat
```

CK will create all static html pages in the "tmp-website" sub-directory
that you can upload to your web server.

You can generate a list of artifacts with their ACM badges from the HotCRP JSON file as follows:
```
 $ ck process_hotcrp ae --json_file={downloaded JSON file with decisions from HotCRP}
```

You can also validate your artifact XML before adding it to the ACM DL as follows:
```
```


Contributions
=============

Just send a pull request and contact [Grigori Fursin](mailto:Grigori.Fursin@cTuning.org)
to upload your updates to cTuning.org/ae .

Public discussions
==================
* [Artifact Evaluation google group](https://groups.google.com/forum/#!forum/artifact-evaluation)
* [Collective Knowledge google group](http://groups.google.com/group/collective-knowledge)

Artifacts in the CK format
==========================

We promote collaborative and reproducible research where artifacts and workflows are shared along 
with papers in a common "plug&play" format to let the community quickly reuse them and thus
accelerate science!

Please check [ACM proceedings](https://doi.org/10.1145/3229762) 
of our [1st ACM ReQUEST tournament](https://portalparts.acm.org/3230000/3229762/fm/frontmatter.pdf) 
with a [live scoreboard](http://cknowledge.org/request-results) 
and with all artifacts and workflows shared in a [common CK format](https://github.com/ctuning/ck-request-asplos18-results)!

You can also check this reusable and customizable artifact from [CGO'17](http://cgo.org/cgo2017) 
with automatic cross-platform software installation and web-based experimental dashboard powered 
by the CK framework: 
* [GitHub CK repo](https://github.com/SamAinsworth/reproduce-cgo2017-paper)
* [Paper with artifact appendix](http://cTuning.org/ae/resources/paper-with-distinguished-ck-artifact-and-ae-appendix-cgo2017.pdf)
* [PDF snapshot of the interactive CK dashboard](https://github.com/SamAinsworth/reproduce-cgo2017-paper/files/618737/ck-aarch64-dashboard.pdf)

Vision publications
===================

* [PDF](https://hal.inria.fr/inria-00436029v2/document)

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
```

* [PDF](https://arxiv.org/pdf/1406.4020)

```
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
 url = { http://doi.acm.org/10.1145/2618137.2618142 },
 doi = {10.1145/2618137.2618142},
 acmid = {2618142},
 publisher = {ACM},
 address = {New York, NY, USA},
 keywords = {collaborative artifact evaluation, collective mind, community-driven journals, crowdsourcing paper reviewing, reproducible research, software and hardware dependencies},
} 
```

* [PDF](https://drive.google.com/file/d/0B3lp_jPECSVlTkVvQlltd2FyenM/view)

```
@inproceedings{ck-date16,
    title = {{Collective Knowledge}: towards {R\&D} sustainability},
    author = {Fursin, Grigori and Lokhmotov, Anton and Plowman, Ed},
    booktitle = {Proceedings of the Conference on Design, Automation and Test in Europe (DATE'16)},
    year = {2016},
    month = {March},
    url = {https://www.researchgate.net/publication/304010295_Collective_Knowledge_Towards_RD_Sustainability}
}

```

***This page is archived since we deprecated the CK framework and are gradually updating the guidelines for the CM framework (CK2).***

Preparing the CK-based web-site for Artifact Evaluation
=======================================================

Install the Collective Knowledge framework (CK) on Linux, Windows or MacOS 
as described [here](https://ck.readthedocs.io/en/latest/src/installation.html).

Pull this repository:

```bash
ck pull repo:ck-artifact-evaluation
```

Note that the dependencies on ck-web and other CK repositories 
will be automatically resolved by the CK framework!


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

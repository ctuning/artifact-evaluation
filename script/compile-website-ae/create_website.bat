rem call local_env.bat

set CK_CROWDSOURCE_PATH=D:\Work1\CK\ck-crowdsourcing
set CK_REPOS=D:\Work1\CK\ck-repos
set CK_ROOT=D:\Work1\CK\ck
set CK_TOOLS=D:\Work1\CK\ck-tools

set CK_WFE_URL_PREFIX_SKIP=yes
rem set CK_WFE_URL_PREFIX=

set CK_WFE_URL_PREFIX_PAGE_SKIP=yes
set CK_WFE_URL_PREFIX_PULL_SKIP=yes

ck process_all_pages wfe:artifact-evaluation

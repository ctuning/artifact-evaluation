rem call local_env.bat

set CK_WFE_URL_PREFIX_SKIP=yes
rem set CK_WFE_URL_PREFIX=

set CK_WFE_URL_PREFIX_PAGE_SKIP=yes
set CK_WFE_URL_PREFIX_PULL_SKIP=yes

ck process_all_pages wfe:artifact-evaluation

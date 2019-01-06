#
# Collective Knowledge (automating artifact evaluation)
#
# See CK LICENSE.txt for licensing details
# See CK COPYRIGHT.txt for copyright details
#
# Developer: Grigori Fursin, Grigori.Fursin@cTuning.org, http://fursin.net
#

cfg={}  # Will be updated by CK (meta description of this module)
work={} # Will be updated by CK (temporal data)
ck=None # Will be updated by CK (initialized CK kernel) 

# Local settings

##############################################################################
# Initialize module

def init(i):
    """

    Input:  {}

    Output: {
              return       - return code =  0, if successful
                                         >  0, if error
              (error)      - error text if return > 0
            }

    """
    return {'return':0}

##############################################################################
# process JSON file from HOTCRP and generate table of artifacts

def process_hotcrp(i):
    """
    Input:  {
              json_file - input JSON file from HOTCRP
            }

    Output: {
              return       - return code =  0, if successful
                                         >  0, if error
              (error)      - error text if return > 0
            }

    """

    jf=i.get('json_file','')
    if jf=='':
       return {'return':1, 'error':'--json_file with HOTCRP JSON file is not specified'}

    r=ck.load_json_file({'json_file':jf})
    if r['return']>0: return r

    d=r['dict']

    hh='<table border="1" style="border-width: 1px;border-spacing:0px;" cellpadding="5">\n'
    hh+=' <tr>\n'
    hh+='  <td valign="top"><b>Paper</b></td>\n'
    hh+='  <td valign="top"><b>Artifact available</b></td>\n'
    hh+='  <td valign="top"><b>Artifact functional</b></td>\n'
    hh+='  <td valign="top"><b>Artifact reusable</b></td>\n'
    hh+='  <td valign="top"><b>Results reproduced</b></td>\n'
    hh+='  <td valign="top"><b>Results replicated</b></td>\n'
    hh+=' </tr>\n'


    tt=''

    j=0
    for a in d:
        j+=1

        sj=str(j)
        if len(sj)<2: sj=' '+sj

        title=a['title']
        authors=a['authors']
        decision=a['decision']

        badges=''

        xauthors=''
        for au in authors:
            if xauthors!='': xauthors+=', '
            xauthors+=au['first']+' '+au['last']

        ck.out(sj+') '+title)

        hh+=' <tr>\n'
        hh+='  <td valign="top">\n'
        hh+='   <b>'+sj+') '+title+'</b><br>\n'
        hh+='   <i>'+xauthors+'</i><p>\n'

        hh+='  </td>\n'
        hh+='  <td valign="top" align="center">\n'
        if 'available' in decision:
           hh+='   <img src="https://www.acm.org/binaries/content/gallery/acm/publications/replication-badges/artifacts_available_dl.jpg" width="64"><br>\n'
           if badges!='': badges+=','
           badges+='available'
        hh+='  </td>\n'

        hh+='  <td valign="top" align="center">\n'
        if 'functional' in decision:
           hh+='   <img src="https://www.acm.org/binaries/content/gallery/acm/publications/replication-badges/artifacts_evaluated_functional_dl.jpg" width="64"><br>\n'
           if badges!='': badges+=','
           badges+='functional'
        hh+='  </td>\n'

        hh+='  <td valign="top" align="center">\n'
        if 'reusable' in decision:
           hh+='   <img src="https://www.acm.org/binaries/content/gallery/acm/publications/replication-badges/artifacts_evaluated_reusable_dl.jpg" width="64"><br>\n'
           if badges!='': badges+=','
           badges+='reusable'
        hh+='  </td>\n'

        hh+='  <td valign="top" align="center">\n'
        hh+='  </td>\n'

        hh+='  <td valign="top" align="center">\n'
        if 'replicated' in decision:
           hh+='   <img src="https://www.acm.org/binaries/content/gallery/acm/publications/replication-badges/results_replicated_dl.jpg" width="64"><br>\n'
           if badges!='': badges+=','
           badges+='replicated'
        hh+='  </td>\n'

        hh+=' </tr>\n'


        tt+='***********************************************\n'
        tt+=sj+') '+title+'\n'
        tt+='    ('+xauthors+')\n'
        tt+='\n'
        tt+='    ACM badges: '+badges+'\n'


    hh+='</table>\n'

    r=ck.save_text_file({'text_file':'tmp-ae.html', 'string':hh})
    if r['return']>0: return r

    r=ck.save_text_file({'text_file':'tmp-ae.txt', 'string':tt})
    if r['return']>0: return r


    return {'return':0}

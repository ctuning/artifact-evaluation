#
# Collective Knowledge (generate AE table)
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
# generate table with AE members per year

def generate(i):
    """
    Input:  {
            }

    Output: {
              return       - return code =  0, if successful
                                         >  0, if error
              (error)      - error text if return > 0
            }

    """

    s=''
    tags_desc=i.get('tags_desc','')

    s+='<table border="0" cellpadding="3" cellspacing="0" class="ck_margin_40px">\n\n'
    s+=' <tr><td><b>Name:</b></td> <td><b>Organization:</b></td>'

    for q in tags_desc:
        tg=q['id']
        name=q['name']
        s+='<td align="center"><b>'+name+'</b></td>'
    s+='</tr>\n'


    aec={}
    aecx={}

    for q in tags_desc:
        tg=q['id']
        name=q['name']

        # List all people
        ii={'action':'search',
            'module_uoa':cfg['module_deps']['person'],
            'tags':tg,
            'add_meta':'yes'
           }
        r=ck.access(ii)
        if r['return']>0: return r

        lst=r['lst']

        for q in lst:
            d=q.get('meta',{})
            n=d.get('name','')
            o=d.get('organization','')
            if n!='':
               nx=n.split(' ')
               if len(nx)==2:
                  ny=nx[1]+' '+nx[0]
                  aecx[ny]=n
                  if ny not in aec: 
                     aec[ny]={'tags':[]}
                  aec[ny]['tags'].append(tg)
                  aec[ny]['org']=o

    for q in sorted(aec):
        n=aecx[q]
        t=aec[q]['tags']
        o=aec[q]['org']


        s+=' <tr><td>'+n+'</td><td>'+o+'</td>'

        for q in tags_desc:

            tg=q['id']
            name=q['name']

            sx=''
            if tg in t: sx='<b>*</b>'
            s+='<td align="center">'+sx+'</td>'

        s+='</tr>\n'

    s+='\n'
    s+='</table>\n'

    ck.out(s)

    return {'return':0}

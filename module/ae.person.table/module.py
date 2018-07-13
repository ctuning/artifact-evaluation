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

    x=''
    y='style="background-color:#efefef"'
    highlight1=False

    for q in tags_desc:
        if highlight1:
           x1=x
           highlight1=False
        else:
           x1=y
           highlight1=True

        tg=q['id']
        name=q['name']

        s+='<td '+x1+' align="center"><b>'+name+'</b></td>'

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
               # Sort by surname
               n1=''
               n2=n
               j=n.rfind(' ')
               if j>0:
                  n1=n[:j].strip()
                  n2=n[j+1:].strip()

               ny=n2+' '+n1
               aecx[ny]=n
               if ny not in aec: 
                  aec[ny]={'tags':[]}
               aec[ny]['tags'].append(tg)
               aec[ny]['org']=o

    highlight=True
    for q in sorted(aec):
        n=aecx[q]
        t=aec[q]['tags']
        o=aec[q]['org']

        if highlight:
           x='style="background-color:#dfcfff"'
           y='style="background-color:#cf9fff"'
           highlight=False
        else:
           x=''
           y='style="background-color:#efefef"'
           highlight=True

        s+=' <tr '+x+'><td>'+n+'</td><td>'+o+'</td>'

        highlight1=False
        for q in tags_desc:

            if highlight1:
               x1=x
               highlight1=False
            else:
               x1=y
               highlight1=True

            tg=q['id']
            name=q['name']

            sx=''
            if tg in t: sx='<b>*</b>'
            s+='<td '+x1+' align="center">'+sx+'</td>'

        s+='</tr>\n'

    s+='\n'
    s+='</table>\n'

    ck.out(s)

    return {'return':0}

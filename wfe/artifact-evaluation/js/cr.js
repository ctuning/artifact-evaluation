/*

 Copyright 2020 cKnowledge

 Developer(s): Grigori Fursin, https://cKnowledge.io/@gfursin

*/

// Get specific cookie
function getCKCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
};

// Access CK portal API
async function accessCK(api_url, dict, uploadInput) {

  // Form Data
//  const formData = new FormData();
  const formData = dict;

  // Add uploaded file if needed
  if (uploadInput && uploadInput.files && uploadInput.files.length == 1) {
    formData.append("file", uploadInput.files[0]);
  }

  // Add authentication
  var csrftoken = getCKCookie('csrftoken');

  // SEEMS like above authentication is not directly related to the browser one
  // I managed to login at some point but then couldn't get another user ...

  var output={'return':9, 'error':'empty output'};

  if (!api_url || api_url=='')
    api_url='/api/v1/?'

  console.log(api_url);

  const r = await fetch(api_url, 
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify(formData),
      mode: 'cors',
      cache: 'default'
    }).then(response => {
      if (!response.ok)
        return {'return':9, 'error':'cK portal API returned error: '+response.statusText};
      else 
        return response.json();
    }).then(function (data) {
//      alert(csrftoken+'\n'+JSON.stringify(data));
      output=data;
    }).catch(function(error) {
      output={'return':9, 'error':'Error while accessing the CK portal API: '+error}
    });

  return output;
}

// Copy to Clipboard
function cr_copy_to_clipboard(id) {
  /* Get the text field */
  var el = document.getElementById(id);

  /* Taken from https://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse */
  var win = window;
  var doc = window.document, sel, range;

  if (win.getSelection && doc.createRange) {
      sel = win.getSelection();
      range = doc.createRange();
      range.selectNodeContents(el);
      sel.removeAllRanges();
      sel.addRange(range);
  } else if (doc.body.createTextRange) {
      range = doc.body.createTextRange();
      range.moveToElementText(el);
      range.select();
  }

  document.execCommand("copy");
} 

// Show or hide element
function cr_show_or_hide_element(id) {
  var x = document.getElementById(id);
  var y = document.getElementById('button-'+id);

  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerHTML="<small>Hide</small>";
  } else {
    x.style.display = "none";
    y.innerHTML="<small>Show</small>";
  }
}

// Show or done element
function cr_show_or_done_element(id) {
  var x = document.getElementById(id);
  var y = document.getElementById('button-'+id);

  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerHTML="<small>Hide when done</small>";
  } else {
    x.style.display = "none";
    y.innerHTML="<small>Done - show again</small>";
  }
}

// Regenerate API key
async function cr_regenerate_api_key(id) {
  var x = document.getElementById(id);
  x.innerHTML='Updating <strike>'+x.innerHTML+'</strike> ...';

  var dict = {
              'action':'generate_api_key', 
              'dict':{
               }
             };

  let r=accessCK('/api/v1/?', dict, null);

  var data=await r;

  if (data==null) alert("Empty output from the portal");
  else if (!('return' in data) || data['return']>0) alert("Error: "+data['error'].toString());
  else {
    if ('api_key' in data) {
      var api_key=data['api_key'];
      console.log(api_key);
      x.innerHTML=api_key;
    }
  }
}

// Refresh deps
async function cr_refresh_deps(module,data,version) {

  var dict = {
              'action':'refresh_deps', 
              'dict':{
                  'module_uoa':module,
                  'data_uoa':data,
                  'version':version
               }
             };

  let r=accessCK('/api/v1/?', dict, null);

  var data=await r;

  if (data==null) alert("Empty output from the portal");
  else if (!('return' in data) || data['return']>0) alert("Error: "+data['error'].toString());

  location.reload();
}

// Check event
function check_ck_event(id, extra) {
 try {
  accessCK('/api/v1/?', {'action':'event', 'type':id, 'extra':extra}, null);
 }
 catch(err) {
 }
}

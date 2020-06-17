function validate() {
  var name = document.getElementById('name').value;
  var heading = document.getElementById('heading').value;
  var sub_heading = document.getElementById('sub-heading').value;
  var content = document.getElementById('content').value;
  var error_message = document.getElementById('error_message');

  error_message.style.padding = '10px';

  var text;
  if (name.length < 3 || name == '') {
    text = 'Please Enter Author Name';
    error_message.innerHTML = text;
    return false;
  }

  if (heading.length < 3) {
    text = 'Please Enter Heading';
    error_message.innerHTML = text;
    return false;
  }
  if (sub_heading.length < 6) {
    text = 'Please Enter Sub Heading';
    error_message.innerHTML = text;
    return false;
  }
  if (content.length <= 140) {
    text = 'Please Enter More Than 140 Characters';
    error_message.innerHTML = text;
    return false;
  }
  alert('Form Submitted Successfully!');
  return true;
}

document.getElementById('click').addEventListener('click', function (e) {
  e.preventDefault();
  // alert('Form Successfully Submitted. Scroll down for posted content');
  var a_name = document.getElementById('a_name');
  var a_title = document.getElementById('a_title');
  var a_sub_head = document.getElementById('a_sub-head');
  var a_content = document.getElementById('a_content');
  a_name.innerHTML = document.getElementById('name').value;
  a_title.innerHTML = document.getElementById('heading').value;
  a_sub_head.innerHTML = document.getElementById('sub-heading').value;
  a_content.innerHTML = document.getElementById('content').value;
});

document.getElementsByClassName('style1').setAttribute('class', 'style1');

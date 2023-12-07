$(document).ready(function () {
    $('.slider_img').bxSlider({
      auto: true,
      speed: 500,
      pause: 3000,
      mode: 'fade',
      autoControls: true,
      pager: true,
    });
  });
 
  function selectAll(selectAll)  {
    const checkboxes 
         = document.getElementsByName('chk');
    
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAll.checked;
    })
  }

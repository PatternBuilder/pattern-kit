/**
 * Commented out until tab refactor is complete
 */


// function switchToTab(targetHref) {
//   var $target = $('[href="' + targetHref + '"]'),
//       currentTargetState = $target.attr('data-rh-tab');

//   if (currentTargetState == 'inactive') {
//     toggleClickedTab($target);
//     toggleTabPane(targetHref);
//     history.pushState(null,null,targetHref);
//   };

// }

// function toggleClickedTab(target) {
//   target.siblings().attr('data-rh-tab', 'inactive');
//   target.attr('data-rh-tab', 'active');
// }

// function toggleTabPane(targetHref) {
//   $(targetHref).siblings().attr('data-rh-state', 'closed');
//   $(targetHref).attr('data-rh-state', 'open');
// }

// // Set click function on data-rh-tab links
// $('[data-rh-tab]').on('click', function(e) {
//   e.preventDefault();
//   switchToTab($(this).attr('href'));
// });

// // Switch to tab specific in hash
// $(document).on('ready', function() {
//   var hash = window.location.hash;
//   // if that hash exists inside of a rh-tab
//   if ($('[data-rh-tab][href="' + hash + '"]').length) {
//     switchToTab(hash);
//   }
// });



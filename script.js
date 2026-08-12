const s = window.SITE;
document.title = `${s.name} | Academic Homepage`;
document.querySelectorAll('[data-name]').forEach(el => el.textContent = s.name);
document.querySelector('[data-initials]').textContent = s.initials;
document.querySelector('[data-role]').textContent = s.role;
document.querySelector('[data-affiliation]').textContent = s.affiliation;
document.querySelector('[data-about]').textContent = s.about;
document.querySelectorAll('[data-scholar]').forEach(el => {
  if (s.scholar && !s.scholar.includes('YOUR_ID')) el.href = s.scholar;
  else { const separator = el.nextElementSibling; if (separator?.tagName === 'SPAN') separator.hidden = true; el.hidden = true; }
});
document.querySelectorAll('[data-orcid]').forEach(el => el.href = s.orcid);
document.querySelectorAll('[data-email]').forEach(el => el.href = `mailto:${s.email}`);
document.querySelectorAll('[data-email-text]').forEach(el => el.textContent = s.email);
document.querySelectorAll('[data-secondary-email]').forEach(el => el.href = `mailto:${s.secondaryEmail}`);
document.querySelectorAll('[data-secondary-email-text]').forEach(el => el.textContent = s.secondaryEmail);
const cvLink = document.querySelector('[data-cv]');
if (s.cv) cvLink.href = s.cv;
else { const separator = cvLink.previousElementSibling; if (separator?.tagName === 'SPAN') separator.hidden = true; cvLink.hidden = true; }
document.querySelector('[data-updated]').textContent = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date());

if (s.photo) {
  const photo = document.querySelector('[data-photo]');
  photo.src = s.photo;
  photo.hidden = false;
  document.querySelector('[data-initials]').hidden = true;
}

document.querySelector('[data-research]').innerHTML = s.research.map(item => `<li>${item}</li>`).join('');
document.querySelector('[data-publications]').innerHTML = s.publications.length ? s.publications.map(item => `
  <li><a href="${item.url}" target="_blank" rel="noreferrer"><strong>${item.title}</strong></a><br>
  <span>${item.authors}</span><br><em>${item.venue}</em></li>
`).join('') : '<li class="placeholder">To be updated.</li>';
document.querySelector('[data-education]').innerHTML = s.education.length ? s.education.map(item => `
  <li><strong>${item.degree}</strong>, ${item.school} <span>${item.years}</span></li>
`).join('') : '<li class="placeholder">To be updated.</li>';

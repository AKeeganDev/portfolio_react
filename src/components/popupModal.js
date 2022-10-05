import '../stylesheets/popupModal.scss';

const togglePopup = () => {
  const popup = document.getElementById('modal-backdrop');
  popup.classList.toggle('hidden');
  popup.classList.toggle('flex');
};

const generatePopup = (githubURL = 'url', liveDemo = 'liveurl', modalImage = 'imageurl', languages = ['one', 'two', 'three'], description = 'description of project', title = 'project title') => {
  // toggles visibility of popup
  togglePopup();

  // Selects all elements of the popup Modal
  const projectTitle = document.getElementById('popup-title');
  const tags = document.getElementById('popup-tags');
  const image = document.getElementById('popup-image');
  const projectDescription = document.getElementById('popup-description');
  const buttons = document.getElementById('popup-button-div');

  // Inserts project title
  projectTitle.textContent = title;
  tags.innerHTML = '';
  languages.forEach((language) => {
    tags.innerHTML
    += `
      <li>
      <div>${language}</div>
    </li>
      `;
  });

  // Inserts project image
  image.src = modalImage;
  projectDescription.textContent = description;

  // Creates buttons based on whether the project has a live demo link or not
  if (liveDemo) {
    buttons.innerHTML = `<a id="see-project" href="${githubURL}" target="_blank" class="see-project modal-button source-button">
    See project
  </a>
  <a id="live-demo" href="${liveDemo}" target="_blank" class="see-project modal-button">
    Live demo
  </a>`;
  } else {
    buttons.innerHTML = `<a id="see-project" type="button" href="${githubURL}" target="_blank" className="see-project modal-button source-button">
    See project
  </a>`;
  }
};

const PopupModal = () => (
  <div id="modal-backdrop" className="hide">
    <div id="modal">
      <div className="modal-header">
        <h3 id="popup-title" className="modal-title">..</h3>
        <div role="presentation" className="modal-close" onClick={togglePopup} />
      </div>
      <div className="modal-tags">
        <ul id="popup-tags">
          ..
        </ul>
      </div>
      <div className="modal-details">
        <img id="popup-image" src="./img/modal-img.svg" alt="" className="modal-image" />
        <div className="modal-description">
          <p id="popup-description" className="modal-text" />
          <div id="popup-button-div" className="flex" />
        </div>
      </div>
    </div>
  </div>
);

export { generatePopup };
export default PopupModal;

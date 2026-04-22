const COMMENTS_KEY = "ppCompassPlaceComments";
const AUTHOR_KEY = "ppCompassCommentAuthorId";
const MAX_IMAGE_SIZE = 1024 * 1024; // 1 MB
let editingCommentId = null;

function readComments() {
  try {
    return JSON.parse(localStorage.getItem(COMMENTS_KEY)) || [];
  } catch {
    return [];
  }
}

function writeComments(comments) {
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
}

function getAuthorId() {
  let authorId = localStorage.getItem(AUTHOR_KEY);
  if (!authorId) {
    authorId = crypto.randomUUID();
    localStorage.setItem(AUTHOR_KEY, authorId);
  }
  return authorId;
}

function getPlaceNameFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("place") || "";
}

function getAllPlaces() {
  return [...cafesData, ...restaurantsData, ...museumsData, ...sightsData];
}

function findPlaceByName(name) {
  if (!name) return null;
  return getAllPlaces().find((place) => place.name === name) || null;
}

function renderPlace(place) {
  if (!place) {
    document.getElementById("place-name").textContent = "Place not found";
    document.getElementById("place-location").textContent =
      "Invalid or missing place query.";
    document.getElementById("place-description").textContent =
      "Please go back and open the detail page from Explore.";
    document.getElementById("place-image").src = "";
    document.getElementById("place-image").alt = "Place not found";
    document.getElementById("place-price").textContent = "";
    document.getElementById("place-hours").textContent = "";
    const mapLink = document.getElementById("place-map");
    mapLink.href = "#";
    mapLink.classList.add("pointer-events-none", "opacity-50");
    return;
  }

  document.title = `${place.name} - Phnom Penh Compass`;
  document.getElementById("place-name").textContent = place.name;
  document.getElementById("place-location").textContent = place.location;
  document.getElementById("place-description").textContent = place.description;
  document.getElementById("place-image").src = place.image;
  document.getElementById("place-image").alt = place.alt || place.name;
  document.getElementById("place-price").textContent = place.price;
  document.getElementById("place-hours").textContent = place.hours;
  document.getElementById("place-map").href = place.mapsUrl || "#";
}

function formatDate(iso) {
  const date = new Date(iso);
  return date.toLocaleString();
}

function renderComments(placeName) {
  const commentsList = document.getElementById("comments-list");
  const currentAuthorId = getAuthorId();
  const comments = readComments()
    .filter((comment) => comment.placeName === placeName)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (!comments.length) {
    commentsList.innerHTML =
      '<p class="text-sm text-gray-500">No comments yet. Be the first to share your feedback.</p>';
    return;
  }

  commentsList.innerHTML = comments
    .map((comment) => {
      const canManage = !comment.authorId || comment.authorId === currentAuthorId;
      const imageBlock = comment.photoData
        ? `<img src="${comment.photoData}" alt="User uploaded feedback" class="object-cover w-full mt-3 border border-gray-100 rounded-lg h-52" />`
        : "";
      const editButton = canManage
        ? `<button type="button" class="comment-edit-btn text-xs font-semibold text-secondary hover:underline" data-comment-id="${comment.id}">Edit</button>`
        : "";
      const deleteButton = canManage
        ? `<button type="button" class="comment-delete-btn text-xs font-semibold text-red-600 hover:underline" data-comment-id="${comment.id}">Delete</button>`
        : "";
				
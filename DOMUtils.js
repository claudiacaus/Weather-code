'use strict';

/**
 * This function removes all the html inside the given element
 */
export const clearDOMElement = (DOMElement) => {
  DOMElement.innerHTML = '';
};

/**
 * This function creates a DOM element with the given tag.
 * In the options parameter it is possible to add some extra data to it:
 *
 *  id - the id of the element
 */
export const elementFactory = (type, attributes, ...children) => {
  const element = document.createElement(type);

  for (key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  children.forEach((child) => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });

  return element;
};

//Find and return a DOM element by its id

export const getDOMElement = (id) => {
  return document.getElementById(id);
};

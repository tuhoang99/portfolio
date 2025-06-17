/**
 * Scrolls the page to a specific section identified by its ID.
 * @param {string} id - The ID of the section to scroll to.
 * If the element with the given ID exists, it will scroll smoothly to that section.
 * If the element does not exist, no action is taken.
 * @example
 * scrollToSection('mySection');
 * This will scroll the page to the element with ID 'mySection'.
 */

export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

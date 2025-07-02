/**
 * Define template paths to load
 */
export const preloadHandlebarsTemplates = async function () {
  console.log('SibirPunk RPG | loading templates...')

  const templatePaths = [
      // TABS
      'systems/sibirpunk/templates/tabs/attributes-skills.hbs',
      'systems/sibirpunk/templates/tabs/general-info.hbs',
      'systems/sibirpunk/templates/tabs/other.hbs',
      'systems/sibirpunk/templates/tabs/status.hbs',

      // PARTS
      'systems/sibirpunk/templates/parts/header.hbs',
      'systems/sibirpunk/templates/parts/profile-img.hbs',
  ]

  return loadTemplates(templatePaths)
}

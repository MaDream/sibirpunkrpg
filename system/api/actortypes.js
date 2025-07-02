/* global Hooks */

// Base definition class
import { BaseDefinitionClass } from './base-definition-class.js'
// All systems
import { SibirpunkCharacterActorSheet } from '../actor/character.js'

export class ActorTypes extends BaseDefinitionClass {
  // Run any necessary compilation on ready
  static onReady () {
    ActorTypes.setSortAlphabetically()
    ActorTypes.initializeLabels()
  }

  static sibirpunkCharacter = {
    label: 'SIBIRPUNK.Actor',
    types: ['character'],
    makeDefault: true,
    sheetClass: SibirpunkCharacterActorSheet,
    template: "systems/sibirpunk/templates/sheet.hbs",
    classes: ["sibirpunk", "sheet", "actor"],
    width: 1280,
    height: 1024
  }
}

// Hook to call onReady when the game is ready
Hooks.once('ready', ActorTypes.onReady)

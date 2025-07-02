/* global Actor, game, foundry, CONST, fromUuidSync */

/**
 * Extend the base ActorSheet document and put all our base functionality here
 * @extends {Actor}
 */
export class SibirpunkActor extends Actor {

  /**
   * @override
   */
  prepareData() {
    if (game.actors.invalidDocumentIds.has(this.id)) {
      return
    }

    super.prepareData();
  }
}

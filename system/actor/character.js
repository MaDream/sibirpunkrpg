/* global game, TextEditor, foundry, DragDrop, Item, SortingHelpers, ui, ActorSheet */


import {_onDotCounterChange, _onDotCounterEmpty, _setupDotCounters, _setupSquareCounters} from "../scripts/counters.js";

export class SibirpunkCharacterActorSheet extends ActorSheet {
    static get defaultOptions () {
        // Define the base list of CSS classes
        const classList = ['character', 'sheet', 'actor', 'sibirpunk']

        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: classList,
            template: "systems/sibirpunk/templates/sheet.hbs",
            width: 740,
            height: 820,
            tabs: [{
                navSelector: '.sheet-tabs',
                contentSelector: '.sheet-body',
                initial: 'stats'
            }]
        })
    }

    get template() {
        return "systems/sibirpunk/templates/sheet.hbs";
    }

    /** @override */
    async getData () {
        // Top-level variables
        const data = await super.getData()
        const actor = this.actor

        // Prepare items
        if (actor.type === 'mortal') {
            this._prepareItems(data)
        }

        return data
    }

    /* -------------------------------------------- */

    async _prepareItems (sheetData) {
        // Prepare items
        super._prepareItems(sheetData)

        // Top-level variables
        const actorData = sheetData.actor
        const actor = this.actor

        actor.system.resources.health.max = 18
        actor.system.resources.psyche.max = 15
        actor.system.resources.spark.max = 15

        actor.system.defense.value = Math.ceil(actor.system.attributes.fit.value / 3)
        actor.system.attributes.fit.subAttribute.value = Math.round((actor.system.attributes.fit.value + 1) / 2)
        actor.system.attributes.flex.subAttribute.value = Math.round((actor.system.attributes.flex.value + 1) / 2)
    }

    activateListeners(html) {
        super.activateListeners(html);

        _setupDotCounters(html)
        _setupSquareCounters(html)

        html.find('.resource-value > .resource-value-step').click(_onDotCounterChange.bind(this))
        html.find('.resource-value > .resource-value-empty').click(_onDotCounterEmpty.bind(this))
    }
}

/* global CONFIG, Hooks, Actors, ActorSheet, ChatMessage, Items, ItemSheet, game, ui, CONST, jscolor */

import { SibirpunkActor } from './actor/actor.js';
import { SibirpunkItem } from './item/item.js';
import { SibirpunkActorDirectory } from './ui/actor-directory.js';
import { ActorTypes } from "./api/actortypes.js";

import { loadHelpers } from './scripts/helpers.js'
import { preloadHandlebarsTemplates } from './scripts/templates.js'

Hooks.once('init', async function () {
    console.log('Sibirpunk | Initializing');

    // Регистрация кастомных классов
    CONFIG.Actor.documentClass = SibirpunkActor;
    CONFIG.Item.documentClass = SibirpunkItem;
    CONFIG.ui.actors = SibirpunkActorDirectory

    CONFIG.Actor.typeLabels = {
        "character": "Character"
    };
    CONFIG.Actor.types = ["character"]

    Actors.unregisterSheet('core', foundry.applications.sheets.ActorSheetV2);
    const actorTypesList = ActorTypes.getList({})
    for (const [, value] of Object.entries(actorTypesList)) {
        const {label, types, sheetClass, makeDefault, template, classes, width, height} = value

        Actors.registerSheet('sibirpunk', sheetClass, {
            label: label,
            types: types,
            makeDefault: makeDefault,
            template: template,
            classes: classes,
            width: width,
            height: height
        })
    }

    preloadHandlebarsTemplates();

    loadHelpers();
});

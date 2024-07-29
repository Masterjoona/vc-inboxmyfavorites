/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "InboxMyFavorites",
    authors: [Devs.Joona],
    description: "Inbox favorited channelsw notifications from servers/categories that are muted",
    patches: [
        {
            find: "this channel should already be loaded",
            replacement: {
                match: /.isGuildOrCategoryOrChannelMuted\(\i,(\i\.id)\)(?=.+?(\i\.\i\.isFavorite))/,
                replace: "$& && !$2($1)"
            }
        }
    ],
});

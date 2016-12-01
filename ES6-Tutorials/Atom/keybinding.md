# keybindings  

> You can override these keybindings by copying and pasting them into your keymap file


Keystroke   Command Source  Selector
a   tree-view:add-file  Tree View   .tree-view
alt-1   pane:show-item-1    Core    body

alt-2   pane:show-item-2    Core    body

alt-3   pane:show-item-3    Core    body

alt-4   pane:show-item-4    Core    body

alt-5   pane:show-item-5    Core    body

alt-6   pane:show-item-6    Core    body

alt-7   pane:show-item-7    Core    body

alt-8   pane:show-item-8    Core    body

alt-9   pane:show-item-9    Core    body

alt-\   tree-view:toggle-focus  Tree View   .platform-win32, .platform-linux

alt-backspace   editor:delete-to-beginning-of-subword   Core    atom-workspace atom-text-editor

alt-cmd-t   notifications:trigger-error Notifications   atom-workspace

alt-delete  editor:delete-to-end-of-subword Core    atom-workspace atom-text-editor

alt-down    native! Core    body .native-key-bindings

alt-enter   find-and-replace:find-all   Find And Replace    .platform-win32 .find-and-replace, 
.platform-linux .find-and-replace
alt-f3  find-and-replace:select-all Find And Replace    .platform-win32 atom-text-editor, 
.platform-linux atom-text-editor
alt-g b open-on-github:blame    Open On GitHub  atom-workspace

alt-g c open-on-github:copy-url Open On GitHub  atom-workspace

alt-g d git-diff:toggle-diff-list   Git Diff    atom-text-editor

alt-g down  git-diff:move-to-next-diff  Git Diff    atom-text-editor

alt-g g open-on-github:repository   Open On GitHub  atom-workspace

alt-g h open-on-github:history  Open On GitHub  atom-workspace

alt-g i open-on-github:issues   Open On GitHub  atom-workspace

alt-g o open-on-github:file Open On GitHub  atom-workspace

alt-g r open-on-github:branch-compare   Open On GitHub  atom-workspace

alt-g up    git-diff:move-to-previous-diff  Git Diff    atom-text-editor

alt-left    native! Core    body .native-key-bindings

alt-left    editor:move-to-previous-subword-boundary    Core    atom-workspace atom-text-editor

alt-left    tree-view:recursive-collapse-directory  Tree View   .tree-view

alt-right   native! Core    body .native-key-bindings

alt-right   editor:move-to-next-subword-boundary    Core    atom-workspace atom-text-editor

alt-right   tree-view:recursive-expand-directory    Tree View   .tree-view

alt-shift-down  native! Core    body .native-key-bindings

alt-shift-left  native! Core    body .native-key-bindings

alt-shift-left  editor:move-selection-left  Core    body

alt-shift-left  editor:select-to-previous-subword-boundary  Core    atom-workspace atom-text-editor

alt-shift-right native! Core    body .native-key-bindings

alt-shift-right editor:move-selection-right Core    body

alt-shift-right editor:select-to-next-subword-boundary  Core    atom-workspace atom-text-editor

alt-shift-up    native! Core    body .native-key-bindings

alt-up  native! Core    body .native-key-bindings

backspace   native! Core    body .native-key-bindings
backspace   core:backspace  Core    body
backspace   tree-view:remove    Tree View   .tree-view
cmd-down    native! Core    body .native-key-bindings
cmd-left    native! Core    body .native-key-bindings
cmd-right   native! Core    body .native-key-bindings
cmd-up  native! Core    body .native-key-bindings
ctrl-+  window:increase-font-size   Core    body
ctrl-+  image-view:zoom-in  Image View  .platform-win32 .image-view
ctrl-+  markdown-preview:zoom-in    Markdown Preview    .platform-win32 .markdown-preview, .platform-linux .markdown-preview
ctrl-,  application:show-settings   Core    body
ctrl-,  settings-view:open  Settings View   .platform-win32, .platform-linux
ctrl--  window:decrease-font-size   Core    body
ctrl--  image-view:zoom-out Image View  .platform-win32 .image-view
ctrl--  markdown-preview:zoom-out   Markdown Preview    .platform-win32 .markdown-preview, .platform-linux .markdown-preview
ctrl-.  key-binding-resolver:toggle Keybinding Resolver .platform-win32
ctrl-/  editor:toggle-line-comments Core    atom-workspace atom-text-editor:not([mini])
ctrl-0  window:reset-font-size  Core    body
ctrl-0  image-view:reset-zoom   Image View  .platform-win32 .image-view
ctrl-0  markdown-preview:reset-zoom Markdown Preview    .platform-win32 .markdown-preview, .platform-linux .markdown-preview
ctrl-1  tree-view:open-selected-entry-in-pane-1 Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-2  tree-view:open-selected-entry-in-pane-2 Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-3  tree-view:open-selected-entry-in-pane-3 Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-4  tree-view:open-selected-entry-in-pane-4 Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-5  tree-view:open-selected-entry-in-pane-5 Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-6  tree-view:open-selected-entry-in-pane-6 Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-7  tree-view:open-selected-entry-in-pane-7 Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-8  tree-view:open-selected-entry-in-pane-8 Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-9  image-view:zoom-to-fit  Image View  .platform-win32 .image-view
ctrl-9  tree-view:open-selected-entry-in-pane-9 Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-:  spell-check:correct-misspelling Spell Check .platform-win32 atom-text-editor
ctrl-:  core:cancel Spell Check .platform-win32 .corrections atom-text-editor
ctrl-<  editor:scroll-to-cursor Core    atom-workspace atom-text-editor:not([mini])
ctrl-=  window:increase-font-size   Core    body
ctrl-=  image-view:zoom-in  Image View  .platform-win32 .image-view
ctrl-=  markdown-preview:zoom-in    Markdown Preview    .platform-win32 .markdown-preview, .platform-linux .markdown-preview
ctrl-[  editor:outdent-selected-rows    Core    atom-workspace atom-text-editor:not([mini])
ctrl-[  tree-view:collapse-directory    Tree View   .tree-view
ctrl-\  tree-view:toggle    Tree View   .platform-win32, .platform-linux
ctrl-]  editor:indent-selected-rows Core    atom-workspace atom-text-editor:not([mini])
ctrl-]  bracket-matcher:remove-brackets-from-selection  Bracket Matcher atom-text-editor
ctrl-]  tree-view:expand-item   Tree View   .tree-view
ctrl-_  window:decrease-font-size   Core    body
ctrl-_  image-view:zoom-out Image View  .platform-win32 .image-view
ctrl-_  markdown-preview:zoom-out   Markdown Preview    .platform-win32 .markdown-preview, .platform-linux .markdown-preview
ctrl-a  core:select-all Core    atom-workspace atom-text-editor
ctrl-alt--  pane:decrease-size  Core    atom-workspace atom-pane
ctrl-
alt-.  bracket-matcher:close-tag   Bracket Matcher .platform-win32 atom-text-editor
ctrl-
alt-/  find-and-replace:toggle-regex-option    Find And Replace    .platform-win32 .find
-and-replace, .platform-linux .find-and-replace
ctrl-alt-/  project-find:toggle-regex-option    Find And Replace    .platform-win32 .project-find, .plat
form-linux .project-find
ctrl-alt-=  pane:increase-size  Core    atom-workspace atom-pane
ctrl-
alt-[  editor:fold-current-row Core    atom-workspace atom-text-editor:not([mini])
ctrl-
alt-[  tree-view:recursive-collapse-directory  Tree View   .tree-view
ctrl-
alt-]  editor:unfold-current-row   Core    atom-workspace atom-text-editor:not([mini])
ctrl-
alt-]  tree-view:recursive-expand-directory    Tree View   .tree-view
ctrl-
alt-backspace  bracket-matcher:remove-matching-brackets    Bracket Matcher .platform-win32 atom-
text-editor
ctrl-alt-c  find-and-replace:toggle-case-option Find And Replace    .platform-win32 .find
-and-replace, .platform-linux .find-and-replace
ctrl-alt-c  project-find:toggle-case-option Find And Replace    .platform-win32 .project-find, .plat
form-linux .project-find
ctrl-alt-down   editor:add-selection-below  Core    body
ctrl-
alt-f  editor:fold-selection   Core    atom-workspace atom-text-editor:not([mini])
ctrl-
alt-f  find-and-replace:show-replace   Find And Replace    .platform-win32, .platform-linux
ctrl-
alt-f2 bookmarks:toggle-bookmark   Bookmarks   .platform-win32 atom-text-editor
ctrl-
alt-m  bracket-matcher:select-inside-brackets  Bracket Matcher .platform-win32 atom-
text-editor
ctrl-alt-o  application:add-project-folder  Core    body
ctrl-
alt-p  window:run-package-specs    Core    body
ctrl-
alt-q  autoflow:reflow-selection   Autoflow    .platform-win32 atom-text-editor, .plat
form-linux atom-text-editor
ctrl-alt-r  window:reload   Core    body
ctrl-
alt-s  find-and-replace:toggle-selection-option    Find And Replace    .platform-win32 .find
-and-replace, .platform-linux .find-and-replace
ctrl-alt-shift-P    editor:log-cursor-scope Core    atom-workspace atom-text-editor
ctrl-
alt-shift-R    dev-live-reload:reload-all  Dev Live Reload .platform-win32
ctrl-
alt-up editor:add-selection-above  Core    body
ctrl-
alt-w  find-and-replace:toggle-whole-word-option   Find And Replace    .platform-win32 .find
-and-replace, .platform-linux .find-and-replace
ctrl-alt-w  project-find:toggle-whole-word-option   Find And Replace    .platform-win32 .proj
ect-find, .platform-linux .project-find
ctrl-alt-z  editor:checkout-head-revision   Core    atom-workspace atom-text-editor:not([mini])
ctrl-
alt-{  editor:fold-all Core    atom-workspace atom-text-editor:not([mini])
ctrl-
alt-}  editor:unfold-all   Core    atom-workspace atom-text-editor:not([mini])
ctrl-
b  native! Core    body .native-key-bindings
ctrl-b  fuzzy-finder:toggle-buffer-finder   Fuzzy Finder    .platform-win32
ctrl-backspace  editor:delete-to-beginning-of-word  Core    atom-workspace atom-text-editor
ctrl-c  core:copy   Core    body
ctrl-c  native! Core    body .native-key-bindings
ctrl-c  tree-view:copy  Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-d  native! Core    body .native-key-bindings
ctrl-d  find-and-replace:select-next    Find And Replace    .platform-win32 atom-text-editor, .platform-linux atom-text-editor
ctrl-delete editor:delete-to-end-of-word    Core    atom-workspace atom-text-editor
ctrl-down   native! Core    body .native-key-bindings
ctrl-down   core:move-down  Core    body
ctrl-down   editor:move-line-down   Core    atom-workspace atom-text-editor:not([mini])
ctrl-e  find-and-replace:use-selection-as-find-pattern  Find And Replace    .platform-win32 atom-text-editor, .platform-linux atom-text-editor
ctrl-end    core:move-to-bottom Core    atom-workspace atom-text-editor
ctrl-enter  editor:newline-below    Core    atom-workspace atom-text-editor:not([mini])
ctrl-enter  find-and-replace:confirm    Find And Replace    .platform-win32 .find-and-replace, .platform-linux .find-and-replace
ctrl-enter  project-find:confirm    Find And Replace    .platform-win32 .project-find, .platform-linux .project-find
ctrl-enter  find-and-replace:replace-all    Find And Replace    .platform-win32 .find-and-replace .replace-container atom-text-editor
ctrl-enter  project-find:replace-all    Find And Replace    .platform-win32 .project-find .replace-container atom-text-editor
ctrl-f  native! Core    body .native-key-bindings
ctrl-f  find-and-replace:show   Find And Replace    .platform-win32, .platform-linux
ctrl-f2 bookmarks:view-all  Bookmarks   atom-text-editor
ctrl-f3 find-and-replace:find-next-selected Find And Replace    .platform-win32 atom-text-editor, .platform-linux atom-text-editor
ctrl-f4 core:close  Core    body
ctrl-g  go-to-line:toggle   Go To Line  .platform-darwin, .platform-win32, .platform-linux
ctrl-h  native! Core    body .native-key-bindings
ctrl-home   core:move-to-top    Core    atom-workspace atom-text-editor
ctrl-insert core:copy   Core    body
ctrl-j  editor:join-lines   Core    atom-workspace atom-text-editor:not([mini])

ctrl-k ctrl-0   editor:unfold-all   Core    atom-workspace atom-text-editor:not([mini])

ctrl-k ctrl-1   editor:fold-at-indent-level-1   Core    atom-workspace atom-text-editor:not([mini])

ctrl-k ctrl-2   editor:fold-at-indent-level-2   Core    atom-workspace atom-text-editor:not([mini])

ctrl-k ctrl-3   editor:fold-at-indent-level-3   Core    atom-workspace atom-text-editor:not([mini])

ctrl-k ctrl-4   editor:fold-at-indent-level-4   Core    atom-workspace atom-text-editor:not([mini])

ctrl-k ctrl-5   editor:fold-at-indent-level-5   Core    atom-workspace atom-text-editor:not([mini])

ctrl-k ctrl-6   editor:fold-at-indent-level-6   Core    atom-workspace atom-text-editor:not([mini])

ctrl-k ctrl-7   editor:fold-at-indent-level-7   Core    atom-workspace atom-text-editor:not([mini])

ctrl-k ctrl-8   editor:fold-at-indent-level-8   Core    atom-workspace atom-text-editor:not([mini])

ctrl-k ctrl-9   editor:fold-at-indent-level-9   Core    atom-workspace atom-text-editor:not([mini])

ctrl-k ctrl-alt-w   pane:close-other-items  Core    body

ctrl-k ctrl-
b   tree-view:toggle    Tree View   .platform-win32, .platform-linux

ctrl-k ctrl-d   find-and-replace:select-skip    Find And Replace    .platform-win32 atom-text-editor, .platform-linux atom-text-editor

ctrl-k ctrl-down    window:focus-pane-below Core    body

ctrl-k ctrl-l   editor:lower-case   Core    atom-workspace atom-text-editor

ctrl-k ctrl-left    window:focus-pane-on-left   Core    body

ctrl-k ctrl-n   window:focus-next-pane  Core    body

ctrl-k ctrl-p   window:focus-previous-pane  Core    body

ctrl-k ctrl-right   window:focus-pane-on-right  Core    body

ctrl-k ctrl-u   editor:upper-case   Core    atom-workspace atom-text-editor

ctrl-k ctrl-up  window:focus-pane-above Core    body

ctrl-k ctrl-w   pane:close  Core    body
ctrl-k down pane:split-down-and-copy-active-item    Core    body
ctrl-k down tree-view:open-selected-entry-down  Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-k h    tree-view:open-selected-entry-left  Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-k j    tree-view:open-selected-entry-down  Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-k k    tree-view:open-selected-entry-up    Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-k l    tree-view:open-selected-entry-right Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-k left pane:split-left-and-copy-active-item    Core    body
ctrl-k left tree-view:open-selected-entry-left  Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-k right    pane:split-right-and-copy-active-item   Core    body
ctrl-k right    tree-view:open-selected-entry-right Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-k up   pane:split-up-and-copy-active-item  Core    body
ctrl-k up   tree-view:open-selected-entry-up    Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-l  editor:select-line  Core    atom-workspace atom-text-editor
ctrl-left   native! Core    body .native-key-bindings
ctrl-left   editor:move-to-beginning-of-word    Core    atom-workspace atom-text-editor
ctrl-m  bracket-matcher:go-to-matching-bracket  Bracket Matcher atom-text-editor
ctrl-n  application:new-file    Core    body
ctrl-o  application:open-file   Core    body
ctrl-p  fuzzy-finder:toggle-file-finder Fuzzy Finder    .platform-win32
ctrl-pagedown   pane:show-next-item Core    body
ctrl-pageup pane:show-previous-item Core    body
ctrl-r  symbols-view:toggle-file-symbols    Symbols View    .platform-win32 atom-text-editor
ctrl-right  native! Core    body .native-key-bindings
ctrl-right  editor:move-to-end-of-word  Core    atom-workspace atom-text-editor
ctrl-s  core:save   Core    body

ctrl-shift-B    native! Core    body .native-key-bindings

ctrl-shift-B    fuzzy-finder:toggle-git-status-finder   Fuzzy Finder    .platform-win32

ctrl-shift-C    editor:copy-path    Core    atom-text-editor:not([mini])

ctrl-shift-C    tree-view:copy-full-path    Tree View   .tree-view

ctrl-shift-D    editor:duplicate-lines  Core    atom-workspace atom-text-editor:not([mini])

ctrl-shift-F    native! Core    body .native-key-bindings

ctrl-shift-F    project-find:show   Find And Replace    .platform-win32, .platform-linux

ctrl-shift-G    styleguide:show Styleguide  .platform-win32, .platform-linux

ctrl-shift-I    window:toggle-dev-tools Core    body

ctrl-shift-K    editor:delete-line  Core    atom-text-editor:not([mini])

ctrl-shift-L    grammar-selector:show   Grammar Selector    .platform-win32 atom-text-editor

ctrl-shift-M    markdown-preview:toggle Markdown Preview    atom-workspace, atom-workspace atom-text-editor

ctrl-shift-N    application:new-window  Core    body

ctrl-shift-O    application:open-folder Core    body

ctrl-shift-P    command-palette:toggle  Command Palette .platform-win32, .platform-win32 .command-palette atom-text-editor

ctrl-shift-R    symbols-view:toggle-project-symbols Symbols View    .platform-win32, .platform-linux

ctrl-shift-S    core:save-as    Core    body

ctrl-shift-T    pane:reopen-closed-item Core    body

ctrl-shift-U    encoding-selector:show  Encoding Selector   .platform-win32 atom-text-editor

ctrl-shift-W    window:close    Core    body

ctrl-shift-Z    core:redo   Core    body

ctrl-shift-Z    native! Core    body .native-key-bindings

ctrl-shift-down native! Core    body .native-key-bindings

ctrl-shift-down core:move-down  Core    body

ctrl-shift-end  core:select-to-bottom   Core    atom-workspace atom-text-editor

ctrl-shift-enter    editor:newline-above    Core    atom-workspace atom-text-editor:not([mini])

ctrl-shift-f2   bookmarks:clear-bookmarks   Bookmarks   .platform-win32 atom-text-editor

ctrl-shift-f3   find-and-replace:find-previous-selected Find And Replace    .platform-win32 atom-text-editor, .platform-linux atom-text-editor

ctrl-shift-home core:select-to-top  Core    atom-workspace atom-text-editor

ctrl-shift-left native! Core    body .native-key-bindings

ctrl-shift-left pane:move-item-left Core    body

ctrl-shift-left editor:select-to-beginning-of-word  Core    atom-workspace atom-text-editor

ctrl-shift-right    native! Core    body .native-key-bindings

ctrl-shift-right    pane:move-item-right    Core    body

ctrl-shift-right    editor:select-to-end-of-word    Core    atom-workspace atom-text-editor

ctrl-shift-tab  pane:show-previous-recently-used-item   Core    body

ctrl-shift-tab ^ctrl    pane:move-active-item-to-top-of-stack   Core    body

ctrl-shift-up   native! Core    body .native-key-bindings

ctrl-shift-up   core:move-up    Core    body
ctrl-space  autocomplete-plus:activate  Autocomplete Plus   atom-text-editor
ctrl-t  fuzzy-finder:toggle-file-finder Fuzzy Finder    .platform-win32
ctrl-tab    pane:show-next-recently-used-item   Core    body
ctrl-tab ^ctrl  pane:move-active-item-to-top-of-stack   Core    body
ctrl-u  find-and-replace:select-undo    Find And Replace    .platform-win32 atom-text-editor, .platform-linux atom-text-editor
ctrl-up native! Core    body .native-key-bindings
ctrl-up core:move-up    Core    body
ctrl-up editor:move-line-up Core    atom-workspace atom-text-editor:not([mini])
ctrl-v  core:paste  Core    body
ctrl-v  native! Core    body .native-key-bindings
ctrl-v  tree-view:paste Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-w  core:close  Core    body
ctrl-w  core:cancel Go To Line  .platform-win32 .go-to-line atom-text-editor[mini]
ctrl-x  core:cut    Core    body
ctrl-x  native! Core    body .native-key-bindings
ctrl-x  tree-view:cut   Tree View   .platform-win32 .tree-view, .platform-linux .tree-view
ctrl-y  core:redo   Core    body
ctrl-z  core:undo   Core    body
ctrl-z  native! Core    body .native-key-bindings
ctrl-|  tree-view:reveal-active-file    Tree View   .platform-win32, .platform-linux
d   tree-view:duplicate Tree View   .tree-view
delete  native! Core    body .native-key-bindings
delete  core:delete Core    body
delete  tree-view:remove    Tree View   .tree-view
down    native! Core    body .native-key-bindings
down    core:move-down  Core    body
end editor:move-to-end-of-screen-line   Core    atom-text-editor
end core:move-to-bottom Tree View   .tree-view
enter   editor:newline  Core    atom-text-editor:not([mini])
enter   core:confirm    Core    .select-list atom-text-editor[mini]
enter   native! Core    body .native-key-bindings
enter   core:confirm    Core    body
enter   core:confirm    Go To Line  .go-to-line atom-text-editor[mini]
enter   core:confirm    Spell Check .corrections atom-text-editor[mini]
enter   tree-view:open-selected-entry   Tree View   .tree-view
enter   core:confirm    Tree View   .tree-view-dialog atom-text-editor[mini]

escape  tool-panel:unfocus  Core    .tool-panel.panel-left, .tool-panel.panel-right

escape  editor:consolidate-selections   Core    atom-text-editor , atom-text-editor[mini]

escape  core:cancel Core    body

escape  autocomplete-plus:cancel    Autocomplete Plus   atom-text-editor.autocomplete-active

escape  core:cancel Go To Line  .go-to-line atom-text-editor[mini]

escape  core:cancel Tree View   .tree-view-dialog atom-text-editor[mini]
f11 window:toggle-full-screen   Core    body
f2  bookmarks:jump-to-next-bookmark Bookmarks   atom-text-editor
f2  tree-view:move  Tree View   .tree-view
f3  find-and-replace:find-next  Find And Replace    .platform-win32 atom-text-editor, .platform-linux atom-text-editor
h   tree-view:collapse-directory    Tree View   .tree-view
home    editor:move-to-first-character-of-line  Core    atom-text-editor
home    core:move-to-top    Tree View   .tree-view
i   tree-view:toggle-vcs-ignored-files  Tree View   .tree-view
j   core:move-down  Archive View    .archive-editor
j   core:move-down  Tree View   .tree-view
k   core:move-up    Archive View    .archive-editor
k   core:move-up    Tree View   .tree-view
l   tree-view:expand-item   Tree View   .tree-view
left    native! Core    body .native-key-bindings
left    core:move-left  Core    body
left    tree-view:collapse-directory    Tree View   .tree-view
m   tree-view:move  Tree View   .tree-view
pagedown    core:page-down  Core    body
pageup  core:page-up    Core    body
right   native! Core    body .native-key-bindings
right   core:move-right Core    body
right   tree-view:expand-item   Tree View   .tree-view
shift-A tree-view:add-folder    Tree View   .tree-view
shift-backspace native! Core    body .native-key-bindings
shift-backspace core:backspace  Core    body
shift-cmd-down  native! Core    body .native-key-bindings
shift-cmd-left  native! Core    body .native-key-bindings
shift-cmd-right native! Core    body .native-key-bindings
shift-cmd-up    native! Core    body .native-key-bindings
shift-delete    core:cut    Core    body
shift-down  native! Core    body .native-key-bindings
shift-down  core:select-down    Core    body
shift-end   editor:select-to-end-of-line    Core    atom-text-editor
shift-enter find-and-replace:show-previous  Find And Replace    .platform-win32 .find-and-replace, .platform-linux .find-and-replace
shift-enter fuzzy-finder:invert-confirm Fuzzy Finder    .fuzzy-finder atom-text-editor[mini]
shift-f2    bookmarks:jump-to-previous-bookmark Bookmarks   atom-text-editor
shift-f3    find-and-replace:find-previous  Find And Replace    .platform-win32 atom-text-editor, .platform-linux atom-text-editor
shift-home  editor:select-to-first-character-of-line    Core    atom-text-editor
shift-insert    core:paste  Core    body
shift-left  native! Core    body .native-key-bindings
shift-left  core:select-left    Core    body
shift-pagedown  core:select-page-down   Core    body
shift-pageup    core:select-page-up Core    body
shift-right native! Core    body .native-key-bindings
shift-right core:select-right   Core    body
shift-tab   editor:outdent-selected-rows    Core    atom-text-editor:not([mini])
shift-tab   core:focus-previous Core    body .native-key-bindings
shift-tab   find-and-replace:focus-previous Find And Replace    .find-and-replace, .project-find, .project-find .results-view
shift-tab   snippets:previous-tab-stop  Snippets    atom-text-editor:not([mini])
shift-up    native! Core    body .native-key-bindings
shift-up    core:select-up  Core    body
tab editor:indent   Core    atom-text-editor:not([mini])
tab core:focus-next Core    body .native-key-bindings
tab find-and-replace:focus-next Find And Replace    .find-and-replace, .project-find, .project-find .results-view
tab snippets:expand Snippets    atom-text-editor:not([mini])
tab snippets:next-tab-stop  Snippets    atom-text-editor:not([mini])
tab core:confirm    Spell Check .corrections atom-text-editor[mini]
up  native! Core    body .native-key-bindings
up  core:move-up    Core    body
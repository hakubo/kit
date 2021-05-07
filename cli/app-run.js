// Description: Run the selected script
let { menu, toggleBackground } = (await cli("fns"));
let script = await arg(`Which script do you want to run?`, menu);
console.log({ script });
let shouldEdit = script.watch || script.schedule || script.system;
if (script.background) {
    toggleBackground(script);
}
else if (shouldEdit) {
    await edit(script.filePath, kenvPath());
}
else {
    await run(script.command);
}
export {};
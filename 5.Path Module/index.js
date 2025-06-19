import path from "path"; // 📦 Load path module (for handling file/folder paths)

// ✅ Base Name → gives just the file name
console.log(path.basename("c:/nodejs/index.js")); // → index.js

// If you're using "type": "module" (ESM), then __filename and require() won’t work directly — you'll need extra steps.
// console.log(path.basename(__filename)); // → current file name

// omit extenction ✅→ gives file name without .js
// console.log(path.basename(__filename, ".js"));

// Directory Name ✅ → gives folder path
// console.log(path.dirname("c:/nodejs/path/index.js"));
// console.log(path.dirname(__filename));

// Extenction ✅ gives file extension
// console.log(path.extname("c:/nodejs/path/index.js"));
// console.log(path.extname(__filename));

// Join✅ → joins parts into one path
// console.log(path.join("/c:", "huxn-webdev", "course", "golang", "structs"));

// Go Up a level ✅  → ".." moves one folder up
// console.log(
//   path.join("/c:", "huxn-webdev", "course", "golang", "structs", "..")
// );
// console.log(
//   path.join("/c:", "huxn-webdev", "course", "golang", "structs", "..", "..")
// );


// ✅ Normalize → fixes path slashes (\\ or //)
//console.log(path.normalize("c:\\courses\\\\redux-course\\")); 
// → c:\courses\redux-course

// console.log(path.normalize("c:\\courses\\\\redux-course\\store\\\features\\.."));
// → c:\courses\redux-course\store

// console.log(path.win32.normalize("C://projects//react///advance-search//"));
// → C:\projects\react\advance-search

// ✅ Parse → breaks path into parts (root, dir, base, ext, name)
// console.log(path.parse(__filename));
// console.log(path.parse(__filename).base); // → full file name
// console.log(path.parse(__filename).name); // → name only
// console.log(path.parse(__filename).ext);  // → extension only


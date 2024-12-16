const fs = require('fs');
const path = require('path');

// Parent directory containing all year subfolders
const parentDirectory = path.join('C:\\Users\\dell\\Desktop\\fiverr repository\\lwa\\_tweets-md\\2024\\');

// Function to recursively process all markdown files in the directory and its subdirectories
const processMarkdownFiles = (dirPath) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);

      // Check if the current path is a directory or a file
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.log('Error getting stats of file:', err);
          return;
        }

        if (stats.isDirectory()) {
          // Recursively process the directory
          processMarkdownFiles(filePath);
        } else if (path.extname(file) === '.md') {
          // Process markdown file
          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.log('Error reading file:', err);
              return;
            }

            // Add Markdown syntax to plain links, excluding already formatted links
            let updatedContent = data.replace(
              /(?<!\[.*?\]\()https?:\/\/\S+/g, 
              '[$&]($&)'
            );

            // Write the updated content back to the file
            fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
              if (err) {
                console.log('Error writing file:', err);
              } else {
                console.log(`File ${file} processed successfully.`);
              }
            });
          });
        }
      });
    });
  });
};

// Start processing from the parent directory
processMarkdownFiles(parentDirectory);

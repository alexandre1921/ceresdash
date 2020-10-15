import { writeFile } from 'fs';

export default (
  path: string,
  jsonContent: string,
  successMessage: string,
): void => {
  writeFile(path, jsonContent, 'utf8', function (
    err,
  ): NodeJS.ErrnoException | null {
    if (err) {
      console.log('An error occured while writing JSON Object to File.');
      console.log(err);
      return err;
    }

    console.log(successMessage);
    return null;
  });
};

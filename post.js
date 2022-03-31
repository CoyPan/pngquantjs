	var outputFile = null;

	/* Test if processed image has been mounted at input-new.png */
	try {
		/* read processed image data in file var */
		outputFile = FS.readFile("/input-new.png");
	} catch (e) {
		/* Cleaning up input png from MEMFS */
		FS.unlink("/input.png");
		return new Error("No output: " + stderr);
	}

	/* Cleanup files from */
	FS.unlink("/input-new.png");
	FS.unlink("/input.png");

	return {
		"data": outputFile
	};
}

pngquant.call(this);

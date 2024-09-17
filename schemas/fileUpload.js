export default {
	name: "fileUpload",
	title: "File Upload",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string"
		},
		{
			name: "file",
			title: "File",
			type: "file",
			options: {
				accept: "application/pdf"
			}
		}
	]
};

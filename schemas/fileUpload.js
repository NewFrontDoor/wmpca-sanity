import { defineField, defineType } from "sanity";

export const fileUploadType = defineType({
	name: "fileUpload",
	title: "File Upload",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string"
		}),
		defineField({
			name: "file",
			title: "File",
			type: "file",
			options: {
				accept: "application/pdf"
			}
		})
	]
});

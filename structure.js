import S from "@sanity/desk-tool/structure-builder";
import {
	MdAssignment,
	MdHome,
	MdVideoLibrary,
	MdDescription,
	MdCollectionsBookmark,
	MdInsertDriveFile,
	MdBorderBottom,
	MdFileUpload
} from "react-icons/md";

import { FaWpforms } from "react-icons/fa";

export default () =>
	S.list()
		.title("WMPCA Admin")
		.items([
			S.listItem()
				.title("Front Page and Menu")
				.icon(MdHome)
				.child(S.editor().title("Front Page and Menu").id("global-main").schemaType("main").documentId("global-main")),
			S.listItem()
				.title("Footer")
				.icon(MdBorderBottom)
				.child(S.editor().title("Footer").id("global-footer").schemaType("footer").documentId("global-footer")),
			S.listItem().title("Blog Post").icon(MdAssignment).child(S.documentTypeList("blog_post").title("Blog Post")),
			S.listItem().title("Pages").icon(MdInsertDriveFile).child(S.documentTypeList("page").title("Page")),
			S.listItem().title("Newsletter").icon(MdDescription).child(S.documentTypeList("newsletter").title("Newsletter")),
			S.listItem().title("Video").icon(MdVideoLibrary).child(S.documentTypeList("video").title("Video")),
			S.listItem()
				.title("Body content blocks")
				.icon(MdCollectionsBookmark)
				.child(
					S.list()
						.title("Body content blocks")
						.items([S.listItem().title("Forms").child(S.documentTypeList("form").title("Forms"))])
				),
			S.listItem()
				.title("Categories")
				.icon(MdCollectionsBookmark)
				.child(
					S.list()
						.title("Categories")
						.items([
							S.listItem().title("Author").child(S.documentTypeList("author").title("Author")),
							S.listItem().title("Category").child(S.documentTypeList("category").title("Category")),
							S.listItem().title("Speaker").child(S.documentTypeList("speaker").title("Speaker")),
							S.listItem().title("Series").child(S.documentTypeList("videoseries").title("Video Series"))
						])
				),
			S.listItem()
				.title("Form Submissions")
				.icon(FaWpforms)
				.child(S.documentTypeList("submission").title("Form Submissions")),
			S.listItem()
				.title("File Uploads")
				.icon(MdFileUpload)
				.child(S.documentTypeList("fileUpload").title("File Uploads"))
		]);

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./block-content";
import category from "./category";
import blogPost from "./blog-post";
import author from "./author";
import speaker from "./speaker";
import page from "./page";
import video from "./video";
import videoSeries from "./video-series";
import menu from "./menu";
import main from "./main";
import newsletter from "./newsletter";
import form from "./form";
import footer from "./footer";
import formField from "./formField";
import videoEmbed from "./video-embed";
import audioEmbed from "./audio-embed";
import formSubmissions from "./form-submissions";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: "default",
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		// The following are document types which will appear
		// in the studio.
		author,
		main,
		footer,
		blogPost,
		category,
		menu,
		page,
		speaker,
		video,
		videoSeries,
		newsletter,
		form,
		formField,
		// When added to this list, object types can be used as
		// { type: 'typename' } in other document schemas
		blockContent,
		videoEmbed,
		audioEmbed,
		formSubmissions
	])
});

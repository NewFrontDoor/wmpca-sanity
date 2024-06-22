import { component } from "@sanity/structure/dist/dts/views";
import React from "react";

const Preview = ({ type, value, onChange }) => {
	if (value) {
		const parsedValues = JSON.parse(value);
		const table = Object.entries(parsedValues)
			.map(
				([key, value]) =>
					`<tr><td>${key}</td> <td>${
						typeof value === "object"
							? `<ul>${(value as Array<string>).map((item) => `<li>${item}</li>`).join("")}</ul>`
							: value
					}</td></tr>`
			)
			.join("");

		return (
			<div>
				<table dangerouslySetInnerHTML={{ __html: table }} />
			</div>
		);
	}
	return <div>{value}</div>;
};

export default {
	name: "submission",
	title: "Form submission",
	type: "document",
	__experimental_actions: ["delete"],
	fields: [
		{
			name: "datetime",
			title: "Submission Date/Time",
			type: "datetime",
			readOnly: true
		},
		{
			name: "formId",
			title: "Originating Form Id",
			type: "string",
			readOnly: true
		},
		{
			name: "values",
			title: "Submitted Values",
			type: "text",
			readOnly: true,
			inputComponent: Preview
		}
	],
	preview: {
		select: {
			datetime: "datetime",
			formId: "formId",
			values: "values"
		},
		prepare(selection) {
			const parsedValues = JSON.parse(selection.values);
			const keys = Object.keys(parsedValues);

			//Find all keys which contain the word name and join them together
			const names = keys
				.filter((key) => key.toLowerCase().includes("name"))
				.map((key) => parsedValues[key])
				.join(" ");

			const title = names ? `Submission from ${names}` : "Submission from Unknown";

			return {
				title: title,
				subtitle: `Form: ${selection.formId}, On: ${new Date(selection.datetime).toLocaleString()}`
			};
		}
	}
};

export const getSingleByIdSchema = {
  params: {
    type: "object",
    additionalProperties: false,
    required: ["id"],
    properties: {
      id: {
        type: "string",
        minLength: 1
      }
    }
  }
} as const;
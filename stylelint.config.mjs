const stylelintConfig = {
  extends: ["stylelint-config-standard"],
  ignoreFiles: [
    "**/.next/**",
    "**/node_modules/**",
    "**/storybook-static/**",
    "**/coverage/**",
    "**/out/**",
    "**/dist/**",
  ],
  rules: {
    "alpha-value-notation": null,
    "at-rule-empty-line-before": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "apply",
          "bottom-left",
          "bottom-right",
          "config",
          "custom-variant",
          "layer",
          "page",
          "plugin",
          "reference",
          "source",
          "tailwind",
          "theme",
          "utility",
          "variant",
        ],
      },
    ],
    "at-rule-prelude-no-invalid": [
      true,
      {
        "ignoreAtRules": ["tailwind", "apply", "layer", "config", "theme"]
      }
    ],
    "color-function-alias-notation": null,
    "color-function-notation": null,
    "comment-empty-line-before": null,
    "custom-property-empty-line-before": null,
    "custom-property-pattern": null,
    "declaration-empty-line-before": null,
    "import-notation": null,
    "keyframe-selector-notation": null,
    "media-feature-range-notation": null,
    "nesting-selector-no-missing-scoping-root": null,
    "rule-empty-line-before": null,
    "value-keyword-case": null,
  },
};

export default stylelintConfig;

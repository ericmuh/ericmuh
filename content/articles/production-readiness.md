---
title: "Production readiness is a systems question"
date: "2026-10-11"
description: "A practical checklist for looking beyond features to deployment, operations, and a maintainable handover."
tags: ["Systems", "Delivery"]
cover: "/images/articles/production-readiness.svg"
coverAlt: "Interconnected architecture layers representing a complete production system"
draft: true
---
This is a starter draft to review and develop before publishing. It is not shown on the website.

## Start with the requirements

Can the team explain the problem, the users, and the constraints? Review the requirements, user flows, and architecture together. A feature checklist alone cannot answer whether a system is ready for use.

## Understand the environment

- Confirm domain, DNS, TLS, hosting, and runtime requirements.
- Identify the configuration and credentials needed for deployment.
- Document backups, restoration, monitoring, and troubleshooting.
- Confirm who owns updates and operational support.

## Make handover usable

A handover should give the next maintainer a clear route from source code to a working deployment. Include setup instructions, configuration requirements, known limitations, and the support arrangements agreed with stakeholders.

## Review before publishing

Add your own examples and decisions from projects you are permitted to discuss. Avoid confidential client details.

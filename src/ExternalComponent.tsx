import {Component, h} from "@stencil/core";

@Component({
    tag: "app-external"
})
export class ExternalComponent {

    render() {
        return <div>Hi there! I was made by "dist-custom-elements" output.</div>
    }
}

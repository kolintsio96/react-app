import ProfileStatusClass from "./index";
import React from "react";
import { create } from "react-test-renderer";

describe("ProfileStatus component", () => {
    test("status should be test", () => {
        const component = create(<ProfileStatusClass status="test" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test");
    });
    test("element <span> should be displayed", () => {
        const component = create(<ProfileStatusClass status="test" />);
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span).not.toBeNull();
    });
    test("element <input> should be hidden", () => {
        const component = create(<ProfileStatusClass status="test" />);
        const instance = component.root;
        expect(() => {
            instance.findByType("input");
        }).toThrow();
    });
    test("element <span> should contains status", () => {
        const component = create(<ProfileStatusClass status="test" />);
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span.children[0]).toBe('test');
    });
    test("element <input> should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatusClass status="test" />);
        const instance = component.root;
        const span = instance.findByType("span");
        span.props.onDoubleClick();
        const input = instance.findByType("input");
        expect(input.props.value).toBe('test');
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatusClass status="test" setUserStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.disableEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});